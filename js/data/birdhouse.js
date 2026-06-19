// Birdhouse run constants.
// craftingLvl / craftingXp = level to BUILD and Crafting XP earned per build
//   (only earned when you build the birdhouse yourself, not when bought pre-made).
// hunterLvl = level to place; hunterXp = Hunter XP per birdhouse on dismantle (full, 10 seeds).
// Each run fills 4 birdhouses; each birdhouse holds 10 seeds.

export const BIRDHOUSES = [
  { name: "Bird house (logs)", craftingLvl: 5, craftingXp: 15, hunterLvl: 5, hunterXp: 280 },
  { name: "Oak bird house", craftingLvl: 15, craftingXp: 20, hunterLvl: 14, hunterXp: 420 },
  { name: "Willow bird house", craftingLvl: 25, craftingXp: 25, hunterLvl: 24, hunterXp: 560 },
  { name: "Teak bird house", craftingLvl: 35, craftingXp: 30, hunterLvl: 34, hunterXp: 700 },
  { name: "Maple bird house", craftingLvl: 45, craftingXp: 35, hunterLvl: 44, hunterXp: 820 },
  { name: "Mahogany bird house", craftingLvl: 50, craftingXp: 40, hunterLvl: 49, hunterXp: 960 },
  { name: "Yew bird house", craftingLvl: 60, craftingXp: 45, hunterLvl: 59, hunterXp: 1020 },
  { name: "Magic bird house", craftingLvl: 75, craftingXp: 50, hunterLvl: 74, hunterXp: 1140 },
  { name: "Redwood bird house", craftingLvl: 90, craftingXp: 55, hunterLvl: 89, hunterXp: 1200 },
];

export const HOUSES_PER_RUN = 4;
export const SEEDS_PER_HOUSE = 10;

// Each birdhouse is built from 1 log (of its type) + 1 clockwork.
export const LOGS_PER_HOUSE = 1;

// Average nests per birdhouse (approx; depends on seed tier). Editable.
export const AVG_NESTS_PER_HOUSE = 2;

// Distribution of nest types per nest produced.
//   p      = probability without a strung rabbit foot
//   pFoot  = probability while wearing a strung rabbit foot
//            (empty nests decrease; ring & egg nests increase)
export const NEST_TYPES = [
  { name: "Bird nest (empty)", p: 1 / 1.538, pFoot: 1 / 1.58 },
  { name: "Bird nest (ring)", p: 1 / 3.125, pFoot: 1 / 2.97 },
  { name: "Bird nest (red egg)", p: 1 / 100, pFoot: 1 / 95 },
  { name: "Bird nest (green egg)", p: 1 / 100, pFoot: 1 / 95 },
  { name: "Bird nest (blue egg)", p: 1 / 100, pFoot: 1 / 95 },
];
