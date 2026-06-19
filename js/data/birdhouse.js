// Birdhouse run constants.
// craftingXp = Crafting XP earned per build (only when you build it yourself, not bought).
// hunterLvl = level to place; hunterXp = Hunter XP per birdhouse on dismantle (full, 10 seeds).
// Each run fills 4 birdhouses; each birdhouse holds 10 seeds.

export const BIRDHOUSES = [
  { name: "Bird house (logs)", craftingXp: 15, hunterLvl: 5, hunterXp: 280 },
  { name: "Oak bird house", craftingXp: 20, hunterLvl: 14, hunterXp: 420 },
  { name: "Willow bird house", craftingXp: 25, hunterLvl: 24, hunterXp: 560 },
  { name: "Teak bird house", craftingXp: 30, hunterLvl: 34, hunterXp: 700 },
  { name: "Maple bird house", craftingXp: 35, hunterLvl: 44, hunterXp: 820 },
  { name: "Mahogany bird house", craftingXp: 40, hunterLvl: 49, hunterXp: 960 },
  { name: "Yew bird house", craftingXp: 45, hunterLvl: 59, hunterXp: 1020 },
  { name: "Magic bird house", craftingXp: 50, hunterLvl: 74, hunterXp: 1140 },
  { name: "Redwood bird house", craftingXp: 55, hunterLvl: 89, hunterXp: 1200 },
];

export const HOUSES_PER_RUN = 4;
export const SEEDS_PER_HOUSE = 10;

// Each birdhouse is built from 1 log (of its type) + 1 clockwork.
export const LOGS_PER_HOUSE = 1;

// Average nests per birdhouse (approx; depends on seed tier). Editable.
export const AVG_NESTS_PER_HOUSE = 2;
