import { GENERAL_ROASTS, IRONMAN_TYPES } from "./data/ironman.js";
import { $, on, numVal, row, fillSelect } from "./lib/dom.js";

export function pickRoast(type) {
  const pool = type.excludeGeneral
    ? type.roasts
    : [...GENERAL_ROASTS, ...type.roasts];
  return pool[Math.floor(Math.random() * pool.length)];
}

const typeSelect = $("#type");
const calcButton = $("#calc");
const output = $("#output");
const out = $("#results");

fillSelect(typeSelect, IRONMAN_TYPES, (t) => t.name);

function render() {
  const type = IRONMAN_TYPES[numVal(typeSelect, 0)];
  out.replaceChildren(row({ name: pickRoast(type), val: "", bad: true }));
  output.hidden = false;
}

on(calcButton, "click", render);
