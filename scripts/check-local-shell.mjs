#!/usr/bin/env node
/**
 * Reports product-level AppShell / Sidebar / Topbar duplication in a consumer
 * that already depends on @paryatech/ui.
 *
 * Does not flag nested panel navigation (e.g. features/.../SectionNav.tsx).
 *
 * Usage: node scripts/check-local-shell.mjs [consumerRoot]
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, basename } from "node:path";

const root = process.argv[2] ? process.argv[2] : process.cwd();
const pkgPath = join(root, "package.json");

if (!existsSync(pkgPath)) {
  console.error(`No package.json at ${root}`);
  process.exit(2);
}

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
if (!deps["@paryatech/ui"]) {
  console.log("No @paryatech/ui dependency — skip.");
  process.exit(0);
}

const bannedExact = new Set([
  "AppShell",
  "Topbar",
  "TopBar",
  "HeaderShell",
  "NavigationShell",
  "RoleSwitcher",
]);

const shellDirs = new Set(["shell", "layout", "layouts", "app", "chrome"]);

const skipDir = new Set([
  "node_modules",
  "dist",
  "build",
  ".git",
  "storybook-static",
  "_design-source",
]);

/** Forbidden Topbar chrome — not part of Booking Direction 03. */
const forbiddenChrome = [
  {
    re: /\bRoleSwitcher\b/,
    reason: "RoleSwitcher is forbidden — Topbar uses kit TopbarActions only (Direction 03)",
  },
  {
    re: /\bOwner\b[\s\S]{0,80}\bAdmin\b[\s\S]{0,80}\bMember\b/,
    reason: "Topbar persona/role switcher chrome is forbidden (Booking Direction 03 only)",
  },
  {
    re: /\['Owner',\s*'Admin',\s*'Member'\]|\["Owner",\s*"Admin",\s*"Member"\]/,
    reason: "Topbar persona/role switcher chrome is forbidden (Booking Direction 03 only)",
  },
];

const hits = [];

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (skipDir.has(name)) continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(tsx|jsx|ts|js)$/.test(name)) continue;
    inspect(full);
  }
}

function inspect(file) {
  const rel = relative(root, file).replaceAll("\\", "/");
  if (rel.startsWith("node_modules/")) return;
  const base = basename(file).replace(/\.(tsx|jsx|ts|js)$/, "");
  const parts = rel.split("/");
  const inShellDir = parts.some((p) => shellDirs.has(p.toLowerCase()));

  if (bannedExact.has(base)) {
    hits.push({
      file: rel,
      reason: `local ${base} file — import AppShell/Topbar from @paryatech/ui (Direction 03 shell only)`,
    });
    return;
  }
  if (base === "Sidebar" && inShellDir) {
    hits.push({ file: rel, reason: "local Sidebar in a shell/layout/app path — use the package Sidebar" });
    return;
  }

  const src = readFileSync(file, "utf8");
  for (const rule of forbiddenChrome) {
    if (rule.re.test(src)) {
      hits.push({ file: rel, reason: rule.reason });
      return;
    }
  }

  if (src.includes("from \"@paryatech/ui\"") || src.includes("from '@paryatech/ui'")) {
    return;
  }
  const definesShell = /export\s+(function|const)\s+(AppShell|Topbar|TopBar|HeaderShell|NavigationShell|RoleSwitcher)\b/.test(
    src,
  );
  if (definesShell) {
    hits.push({ file: rel, reason: "defines a product-level shell component without importing the package" });
  }
}

walk(join(root, "src"));

if (hits.length) {
  console.error("Local product shell duplication detected:\n");
  for (const h of hits) {
    console.error(`- ${h.file}: ${h.reason}`);
  }
  process.exit(1);
}

console.log("No local AppShell/Sidebar/Topbar product-shell duplication found.");
