// formatting helpers — shared across calculators.

// 1234567 -> "1,234,567"
export function num(n, decimals = 0) {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// 0.4213 -> "42.1%"
export function pct(p, decimals = 1) {
  if (!isFinite(p)) return "—";
  return (p * 100).toFixed(decimals) + "%";
}

// minutes -> "1h 23m" / "45m"
export function duration(mins) {
  if (!isFinite(mins)) return "—";
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}
