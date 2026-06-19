# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project intent

**old school abacus** — a collection of elegant, *fast* Old School RuneScape (OSRS) calculators.

The guiding constraint is explicit in the README and should shape every technical decision: **reject modern UI bloat in favor of subsecond load times and zero fluff.** Prefer minimal dependencies, plain/static assets, and lean markup over heavyweight frameworks unless there's a strong reason otherwise.

Planned calculators:
1. Corrupted Gauntlet loot calculator
2. Birdhouse running

## Current state

The repo currently contains only `README.md` — no source code, build tooling, or tests exist yet. There is no established stack, package manager, or commands to document. When scaffolding the project, choose tooling consistent with the "fast, no fluff" constraint above, and update this file with the real build / lint / test / run commands once they exist.
