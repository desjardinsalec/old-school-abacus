// Birdhouse running calculator.
import {
  BIRDHOUSES,
  HOUSES_PER_RUN,
  SEEDS_PER_HOUSE,
  AVG_NESTS_PER_HOUSE,
  LOGS_PER_HOUSE,
  NEST_TYPES,
} from "./data/birdhouse.js";
import { $, on, numVal, row } from "./lib/dom.js";
import { num } from "./lib/format.js";

// Pure math for one birdhouse type over a number of runs.
// `built` = you build the birdhouses yourself (earns Crafting XP); false = bought pre-made.
// `rabbitFoot` = wearing a strung rabbit foot (shifts nest type distribution).
export function runTotals(house, runs, built = true, rabbitFoot = false) {
  const houses = runs * HOUSES_PER_RUN;
  const totalNests = houses * AVG_NESTS_PER_HOUSE;

  // expected count of each nest type
  const nests = NEST_TYPES.map((t) => ({
    name: t.name,
    count: totalNests * (rabbitFoot ? t.pFoot : t.p),
  }));

  return {
    hunterXp: houses * house.hunterXp,
    craftingXp: built ? houses * house.craftingXp : 0,
    logs: built ? houses * LOGS_PER_HOUSE : 0,
    totalNests,
    nests,
    seeds: houses * SEEDS_PER_HOUSE,
    houses,
  };
}

const typeSelect = $("#type");
const runsInput = $("#runs");
const builtInput = $("#built");
const rabbitFootInput = $("#rabbitfoot");
const out = $("#results");

// populate the type dropdown from data
for (const [i, h] of BIRDHOUSES.entries()) {
  const opt = document.createElement("option");
  opt.value = String(i);
  opt.textContent = `${h.name} (lvl ${h.hunterLvl})`;
  typeSelect.append(opt);
}
typeSelect.value = String(BIRDHOUSES.length - 1); // default: best available

function render() {
  const house = BIRDHOUSES[numVal(typeSelect, 0)];
  const runs = numVal(runsInput, 0);
  const built = builtInput.checked;
  const rabbitFoot = rabbitFootInput.checked;
  const t = runTotals(house, runs, built, rabbitFoot);

  const rows = [row({ name: "Hunter XP", val: num(t.hunterXp), good: true })];
  if (built) {
    rows.push(row({ name: "Crafting XP", val: num(t.craftingXp), good: true }));
    rows.push(row({ name: `${house.name} logs needed`, val: num(t.logs) }));
  }
  rows.push(
    row({ name: "Bird nests (avg)", val: num(t.totalNests) }),
    ...t.nests.map((n) => row({ name: `  ${n.name}`, val: num(n.count, 1) })),
    row({ name: "Seeds used", val: num(t.seeds) }),
    row({ name: "Birdhouses placed", val: num(t.houses) })
  );
  out.replaceChildren(...rows);
}

on(typeSelect, "change", render);
on(runsInput, "input", render);
on(builtInput, "change", render);
on(rabbitFootInput, "change", render);
render();
