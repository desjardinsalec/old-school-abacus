// Corrupted Gauntlet loot/drop calculator.
import { UNIQUES, MINUTES_PER_KILL } from "./data/gauntlet.js";
import { $, on, numVal, row } from "./lib/dom.js";
import { num, pct, duration } from "./lib/format.js";

// Pure math — given a 1/oneIn rate over kc kills:
//   expected count, and chance of at least one.
export function expectedDrops(oneIn, kc) {
  const p = 1 / oneIn;
  return {
    expected: p * kc,
    atLeastOne: 1 - Math.pow(1 - p, kc),
  };
}

const kcInput = $("#kc");
const killTimeInput = $("#killtime");
const out = $("#results");

function render() {
  const kc = numVal(kcInput, 0);
  const killTime = numVal(killTimeInput, MINUTES_PER_KILL);
  out.replaceChildren();

  for (const u of UNIQUES) {
    const { expected, atLeastOne } = expectedDrops(u.oneIn, kc);
    out.append(
      row({
        name: u.name,
        rate: `1/${u.oneIn}`,
        val: `${num(expected, 2)} avg · ${pct(atLeastOne)} chance`,
        good: atLeastOne >= 0.5,
      })
    );
  }

  out.append(
    row({ name: "Estimated time", val: duration(kc * killTime) })
  );
}

on(kcInput, "input", render);
on(killTimeInput, "input", render);
render();
