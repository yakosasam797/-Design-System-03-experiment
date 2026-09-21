function h(n, t) {
  return Math.max(1, Math.ceil(Math.max(0, n) / Math.max(1, t)));
}
function e(n, t, r) {
  if (r <= 0) return "Showing 0 of 0";
  const o = (n - 1) * t + 1, a = Math.min(n * t, r);
  return `Showing ${o}–${a} of ${r}`;
}
export {
  h as pageCountFor,
  e as rangeLabel
};
