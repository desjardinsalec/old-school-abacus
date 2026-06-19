// Tongue-in-cheek "what has OSRS membership ACTUALLY cost you" calculator.
// Prices are rough/approximate and very editable — accuracy is not the point.

// Standard OSRS membership, USD per month (single-month rate).
export const MONTHLY_USD = 14.99;

// Assumed annual investment return if you'd invested the fee instead (10%/yr).
export const ANNUAL_RETURN = 0.1;

// RuneScape released in 2001. Nobody has been subscribed longer than this.
export const GAME_RELEASE_YEAR = 2001;

// Things your membership money could have bought instead.
// count shown = total spent / usd.  `whole: true` rounds down to a count of items.
// `note` adds optional snarky subtext under the row name.
export const ALTERNATIVES = [
  { name: "Big Macs", usd: 5.69, whole: true },
  { name: "Cups of fancy coffee", usd: 5.5, whole: true },
  { name: "Movie tickets", usd: 13.5, whole: true },
  { name: "Hours of minimum-wage work to afford it", usd: 7.25, whole: false },
  {
    name: "Brand-new AAA games",
    usd: 70,
    whole: true,
    note: "who the f*ck is paying $70 for a AAA game these days",
  },
];
