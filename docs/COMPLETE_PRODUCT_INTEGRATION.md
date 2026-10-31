# One complete product

2026-10-31. The form-v4 question and matching engine now runs inside the original homepage and quiz interface. This replaces the separate narrative trial presentation; it does not establish psychometric validity or introduce a new scorer version.

## Preserved product behavior

- Original Derpy flight-in entrance and the requested 来自小马谷的一封信 heading.
- Original question panel, typography, chapter banner and previous/next/exit controls.
- Original four chapter dialogs, host images, frames and chapter decorations. Images and the underlying entrance animation complete before revealing the dialog. Opening and closing preserve the background scroll position.
- Original decoded Flurry Heart notification every five completed questions, floating independently above the page.
- Original full result report: cover/profile toggle, four-preference view and interpretation, careers, character-related partner stories, primary/secondary roles and all 36 active role cards.
- Result PNG preview/download, copy-result link, invitation link, saved-result reopening, retake, Gummy and administrator sign-in.

The question content is still 48 total: 32 preference items, 12 fixed task scenes and four adaptive-or-ordinary final slots. Question-26/30 wording corrections and the same-project strategy/heritage contrast remain in place. The removed 单选题 label and generic quiz hint are not restored.

## Routing and state

The canonical entry is the homepage. `?experience=narrative` is accepted by the same homepage and no longer opens a separate interface. The old `narrative-preview.html` redirects into the main product; `start=1` resumes via the homepage. Question progress uses `?quiz=1`, and saved results keep their existing `?r=...#result=...` URLs.

Unfinished form-v4 drafts from `ponyNarrative48-v4` can migrate to `ponyFestival48-v4`, preserving answers and position. On that one migration, the current chapter's original dialog is shown once. Reloading the main quiz resumes the draft without repeating the Derpy entrance or already-opened chapter dialogs. Retaking clears the current draft, not cloud history. Earlier scoring versions remain supported by the existing backend.

## Geometry and checks

The answer-copy flex item now occupies the full available row width. Previously, its intrinsic text width changed the hidden bank-measurement width, making shared answer height vary between questions. The shared measurement covers preference, task and adaptive text instead of only the old core bank.

Phone and desktop browser checks exercise all 48 questions, all four original dialogs, stable answer row width/height, milestone image and notification, draft reload/migration, full report sections, profile/gallery, clipboard result/invitation targets, generated PNG preview, Gummy, saved-result reload, retake and admin login.

The reusable browser check is `scripts/test-product-flow.cjs`. Run from the repository root after `node scripts/prepare-backend.mjs`, with Playwright available. Optional `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE` environment variables select an installed Playwright package and browser. The check uses an in-memory local API; separate cloud checks verify acceptance of the complete result payload. It neither signs into nor bypasses the production admin interface.
