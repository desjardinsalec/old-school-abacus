import {
  MONTHLY_USD,
  ANNUAL_RETURN,
  GAME_RELEASE_YEAR,
  ALTERNATIVES,
} from "./data/membership.js";
import { $, on, numVal, row } from "./lib/dom.js";
import { num, usd } from "./lib/format.js";

export function membershipCost(years, monthlyUsd) {
  const months = years * 12;
  return { months, total: months * monthlyUsd };
}

export function investedInstead(monthly, months, annualRate) {
  const r = annualRate / 12;
  if (r === 0) return monthly * months;
  return monthly * ((Math.pow(1 + r, months) - 1) / r);
}

export function maxYears() {
  return new Date().getFullYear() - GAME_RELEASE_YEAR;
}

const yearsInput = $("#years");
const monthlyInput = $("#monthly");
const out = $("#results");

function render() {
  const years = numVal(yearsInput, 0);
  const monthly = numVal(monthlyInput, MONTHLY_USD);
  const { months, total } = membershipCost(years, monthly);

  const rows = [];

  const cap = maxYears();
  if (years > cap) {
    rows.push(
      row({
        name: "nice try",
        val: "liar",
        bad: true,
        note: `the game came out in ${GAME_RELEASE_YEAR}. that's ${cap} years, tops. log off and touch grass.`,
      })
    );
  }

  rows.push(
    row({ name: "Months of membership", val: num(months) }),
    row({ name: "Total spent (USD)", val: usd(total), bad: true })
  );

  for (const alt of ALTERNATIVES) {
    const count = total / alt.usd;
    rows.push(
      row({
        name: alt.name,
        rate: usd(alt.usd),
        val: alt.whole ? num(Math.floor(count)) : num(count, 1),
        note: alt.note,
      })
    );
  }

  const invested = investedInstead(monthly, months, ANNUAL_RETURN);
  rows.push(
    row({
      name: "If invested instead (10%/yr)",
      val: usd(invested),
      good: true,
      note: "stop using me as an investment calculator too",
    }),
    row({ name: "Growth missed out on", val: usd(invested - total) })
  );

  out.replaceChildren(...rows);
}

on(yearsInput, "input", render);
on(monthlyInput, "input", render);
render();
