// tiny DOM helpers. no framework, just less typing.

export const $ = (sel, root = document) => root.querySelector(sel);

// wire an input's change/input event
export function on(el, event, fn) {
  el.addEventListener(event, fn);
  return el;
}

// read a numeric input, falling back to a default
export function numVal(el, fallback = 0) {
  const v = parseFloat(el.value);
  return isFinite(v) ? v : fallback;
}

// build a result row: <div class="row"><span class="name">..</span><span class="val">..</span></div>
// `note` adds small subtext under the name.
export function row({ name, val, rate, good, bad, note }) {
  const r = document.createElement("div");
  r.className = "row";
  const left = document.createElement("span");
  left.className = "name";
  left.textContent = name;
  if (note) {
    const sub = document.createElement("small");
    sub.className = "subtext";
    sub.textContent = note;
    left.append(sub);
  }
  const right = document.createElement("span");
  right.className = "val" + (good ? " good" : "") + (bad ? " bad" : "");
  right.textContent = val;
  r.append(left);
  if (rate) {
    const mid = document.createElement("span");
    mid.className = "rate";
    mid.textContent = rate;
    r.append(mid);
  }
  r.append(right);
  return r;
}
