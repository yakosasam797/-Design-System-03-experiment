/** Mathematically valid pagination range helpers (1-based pages). */

export function pageCountFor(total: number, pageSize: number): number {
  return Math.max(1, Math.ceil(Math.max(0, total) / Math.max(1, pageSize)));
}

export function rangeLabel(page: number, pageSize: number, total: number): string {
  if (total <= 0) return "Showing 0 of 0";
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  return `Showing ${start}–${end} of ${total}`;
}
