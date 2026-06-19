export function num(n, decimals = 0) {
  if (!isFinite(n)) return "-";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export const usd = (n) => "$" + num(n, 2);

export function pct(p, decimals = 1) {
  if (!isFinite(p)) return "-";
  return (p * 100).toFixed(decimals) + "%";
}

export function duration(mins) {
  if (!isFinite(mins)) return "-";
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}
