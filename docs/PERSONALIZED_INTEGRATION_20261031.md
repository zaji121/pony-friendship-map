# Reviewed question bank integration

The current form is `festival-48-single-20261031-v5`. It retains 32 core items, 12 fixed task items and four final adaptive-or-task slots (48 displayed questions total). The 12 reviewed question drafts are shipped in `public/personalized-followups.js` and are selected within those four slots, never appended to the test.

Selection uses nearby candidates and a weighted contrast-variance heuristic. Editorial candidate associations prefer a known shared-situation comparison when appropriate. Questions already used, equivalent feature pairs and questions that do not distinguish the leading candidates are excluded. This is not IRT-calibrated information gain or a demonstrated improvement in accuracy.

The role-ranking formula, 32 core question items and preference scores are unchanged. No new main-six bonus or probability target is applied. Both/unknown remain supported for older payloads; the current UI presents concrete actions plus an optional uninterested/skip control. Skips contribute no directional preference evidence.

V4 is frozen in `public/quiz-form-48-v4.js`. The backend accepts V1–V5. In-progress V4 drafts resume with V4 questions and planning; fresh attempts use V5. Historical results are read as saved and are not reassigned. Question IDs and selected action text are recorded for personalized followups.

Validation:
- Every reviewed question is selectable with its relevant candidate pair and cannot repeat immediately.
- All 36 V4 saved-answer witnesses retain their original primary roles and version.
- Fresh V5 witnesses and the seeded 20,000-response stress test are in `docs/narrative-form-48-audit.json`.
- The original mobile/desktop product-flow test exercises the reviewed question bank, neutral skips, 48-item completion, original four chapter dialogs, Derpy entrance, Gummy, reports, draft reload/migration, result sharing and PNG export.
- Supabase smoke tests cover a personalized path, a normal V5 path and V4 compatibility. Only the generated test rows are cleaned up.

Synthetic distributions and reachable witnesses do not establish psychometric validity or real-world classification accuracy. The 32 core questions are self-authored MBTI-framework questions, not the official MBTI instrument.
