# Vintage Tee Pricing Laboratory

Mission 3 browser-only pricing and cost laboratory for a proposed affordable vintage inspired graphic tee venture. No final student pricing decision is preconfirmed. The original Mission 2 website is unchanged.

- Live: https://owensullivan2806.github.io/MKTG-project-3-part-2/
- Repository: https://github.com/owensullivan2806/MKTG-project-3-part-2
- Original dashboard: https://owensullivan2806.github.io/MKTG-project-3/

## Use

Explore the seven sections, select a profile, edit expenses and products, then evaluate your pricing. Confirm only after entering your own justification and acknowledging major warnings. Download the DOCX and JSON from the confirmed snapshot. Any input change makes the evaluation stale, including a change later reverted. Configuration exports/imports back up editable profiles; imports clear evaluation and confirmation.

The initial model assumes one $29 tee and 100 sales/month. This is illustrative demand, not a forecast. POD, US online sales, USD, one order per product sale and seller-paid shipping are explicit assumptions. Bundle production scales by physical tees; first-item shipping applies once, then additional-item shipping. No cross-product cart consolidation is inferred.

23 expense assumptions cover production, shipping, returns, payments, technology, insurance, bookkeeping, marketing, design/support labor, incremental home utilities and startup artwork/samples/setup/registration/rights. Three optional assumptions begin disabled. Researched prices and benchmarks are distinguished from estimates, illustrative placeholders and student edits. Source notes and dates are bundled in model.mjs; competitor evidence is the unchanged Mission 1 JSON snapshot from October 27, 2026.

Startup cash is separate from operating profit. Capital spending enters overhead only when explicit straight-line depreciation is enabled. Shared fixed overhead is allocated by volume, revenue or equal shares, once; direct overhead stays with its assigned product. Multi-product break-even assumes a constant entered mix. Nonpositive contribution or absent mixed sales volumes gives no finite break-even. Profit excludes owner compensation unless added, income tax, finance and unmodeled working capital.

Risk rules are exposed in the review, with conservative volume and combined +10% cost / −20% volume stress. They are planning criteria, not probabilities of failure. Competitor price proximity does not imply quality equivalence, availability or delivered-price equivalence.

## Run and build

Requires Node 20+ for the development commands. The published app requires only a modern browser; the bundled MIT-licensed docx 9.6.1 IIFE generates Word documents locally.

```sh
node scripts/build.mjs
node scripts/serve.mjs dist
node --test tests/model.test.mjs
```

Open http://127.0.0.1:4173/. `docs/` is the GitHub Pages deployment artifact. All asset paths are relative; hash routes survive refresh under the repository base path. Fonts have local fallbacks. No API, account, payment, backend or database is required.

To run the additional DOCX structure test, install the optional development dependencies (`npm install`) then `npm test`. In the provided Codex runtime, point NODE_PATH at the bundled node_modules directory instead. Runtime code never depends on node_modules.

## Test workspace

Add `?qa=1` to the URL. This uses isolated in-memory profiles, never touches the normal browser workspace and marks exported snapshots/reports as test only. Confirmation QA was performed exclusively here. The normal published workspace remains unconfirmed.

Reports are genuine OOXML .docx files, with ten required sections and a confirmation ID matching Pricing_Decision_Data.json. Customer-facing fields contain no volumes, costs, profit or private review findings. The full JSON remains a private handoff file and should not be published as-is.

See TESTING.md for actual verification and limits. The app ends at Mission 3; no Mission 4 website changes are made.
