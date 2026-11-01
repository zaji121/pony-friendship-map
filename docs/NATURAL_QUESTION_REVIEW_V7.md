# V7 question wording and main-six presentation review — 2026-11-01

## Product scope

The complete original product remains in use: Derpy entrance, four chapter dialogs, 48 questions, adaptive final slots, saved progress, full result reports, character gallery, Gummy, sharing and PNG export. No standalone experimental quiz replaces it.

The new form is `festival-48-single-20261101-v7`. V6 is frozen in `public/quiz-form-48-v6.js`; older forms and in-progress V6 drafts retain their original wording and scoring. V7 wording is concentrated in `public/question-copy-v7.js`, gated by the new HTML dependencies. Cached V6 HTML safely keeps V6 semantics. A resumed older quiz shows an optional “从新版开始” control; only accepting its confirmation clears that current draft and starts V7. Canceling keeps the old question and answers.

## Editorial decisions

- Review all 32 core questions, 16 narrative task drafts, 15 main-six contrast drafts, 12 personalized drafts and 26 fallback actions. Only 48 questions are shown: 32 core, 12 fixed task scenes and four adaptive/fallback slots.
- Describe the situation without prescribing the respondent's emotion. For example, Q16 no longer says “你有点烦”.
- Replace repeated first-step management language with visible actions, objects and meaningful choices. Q11 is now a choice about the remaining post-rehearsal time, Q24 separates apple delivery, an audio problem, throwing practice and a new structure, and Q26 asks what someone notices about the entrance instead of choosing a literary caption.
- Small mischief is an activity interest. Q34's villain tries to hide the treasure-box clue from the onstage hero; getting exposed is no longer the respondent's intended outcome. It does not score an MBTI pole or imply that a respondent is morally bad.
- There are no duplicate complete answer strings among 208 active options, after punctuation/whitespace normalization. This does not mean different questions never revisit a construct; repeated independent evidence is intentional.

## Framework and evidence boundaries

The original MBTI-framework axis and polarity of each core item are retained, eight items per axis and balanced option order. Narrative activities remain separate from the four core scores. No copyrighted official assessment items are reproduced. This is still a self-authored fan questionnaire, not an official or psychometrically validated MBTI instrument.

Primary framework references reviewed internally (not appended to user-facing questions):

- https://www.myersbriggs.org/my-mbti-personality-type/the-mbti-preferences/
- https://www.themyersbriggs.com/en-US/Support/MBTI-Facts

The rewrite preserves feature codes, adaptive candidate contrasts and raw ranking. Changing wording may change how real people answer, but synthetic choices cannot validate naturalness, reliability or personality-classification accuracy. Character mappings remain editorial story associations.

## Explicit final-display preference

Only when both candidates have sufficient support (at least two positive scenes, two chapters and two traits), a main-six candidate within 0.04 combined similarity and 0.03 core-pattern similarity may be displayed first. Intermediate adaptive routing uses the raw ranking, the raw scores are unchanged, and the original leader is retained as the secondary candidate. Reports disclose when main-six presentation preference applies. V6 remains at its original 0.03/0.03 limits.

This is a product presentation choice, not evidence of increased accuracy. It does not assign fixed quotas or randomly redraw roles.

## Audit and validation

20,000 synthetic completions, seed 20261030: independent fair binary core choices, twelve uniform four-option task choices, four uniform adaptive/fallback slots, no skips simulated.

| Main-six role | V7 synthetic share |
| --- | ---: |
| Twilight | 3.085% |
| Applejack | 2.840% |
| Rainbow Dash | 4.005% |
| Pinkie Pie | 3.075% |
| Fluttershy | 4.275% |
| Rarity | 3.610% |
| Total | 20.890% |

- V6 total: 19.010%. V7 total: 20.890%. The change is from the disclosed final-display rule, not a simulated response change from the new wording.
- All 36 active roles appeared in the synthetic sample. All 36 also have independently replayable strict-winning answer witnesses; a new Scootaloo witness was found after its former witness became a near-score Rainbow Dash presentation.
- V5/V6's 72 historical role witnesses replay with unchanged scores and role assignments. Generated backend tests also cover all earlier form versions and original result models.
- Browser tests passed the complete mobile/desktop 48-question flow, adaptive questions, gallery, copy links, image download and original UX; the complete option bank fits equal-sized rows in the embedded-webview layout tests.
- Cloud smoke tests passed V7 Applejack and Scootaloo save/reopen, V6 Scootaloo replay and read-only verification of an existing Daring Do result. Only the three newly created test sessions/results were cleaned up.

Reproducible checks: `scripts/audit-form-48.mjs`, `scripts/test-natural-question-copy.mjs`, `scripts/test-narrative-backend.mjs`, `scripts/test-product-flow.cjs`, `scripts/test-quiz-webview-layout.cjs`. The machine-readable report is `docs/narrative-form-48-audit.json`; public synthetic statistics are in `public/narrative-matching-audit.json`.

Role reachability is an algorithmic property; none of these checks establishes psychological validity or guarantees that every person will feel represented by one uniquely correct fictional character.
