# Festival single-choice form v1: 48 total

Historical baseline. The later shared-situation revision is documented in [MAIN_SIX_SHARED_SCENES.md](MAIN_SIX_SHARED_SCENES.md). Its current audit is `narrative-form-48-audit.json`; this v1 baseline is retained in `narrative-form-48-v1-baseline.json`.

The existing Derpy entrance and full character reports are retained. This form runs through the narrative experience entry; legacy scoring and saved results retain their own versions.

- 32 framework items: 8 per E/I, S/N, T/F, J/P axis, with balanced option polarity and 8 items in each chapter.
- 14 fixed activity questions and 2 final slots. Final slots adapt to the current candidates where supported, otherwise use ordinary scene questions. They replace slots, never add questions.
- Every displayed question is single-choice. Interest choices never modify four-axis scores. Unasked core items are omitted, not fabricated or duplicated.
- Four-axis orientation contributes 60% and activity similarity contributes 40% in the existing experimental model. These are uncalibrated product parameters, not empirical likelihoods.
- Main-six preference is applied only to exactly equal numeric scores. It cannot override a higher-scoring character. There are no quotas, bonuses or random role assignments.
- All 36 active roles have a strict first-place synthetic answer witness. This establishes algorithmic reachability only. It is not evidence of psychological validity, item discrimination or real-user accuracy.

## Synthetic checks

`scripts/audit-form-48.mjs` records its seed and sampling assumptions in `narrative-form-48-audit.json`. Across 20,000 independent uniform synthetic responses, main six account for 24.075%, the three largest roles together account for 20.3%, and 42.07% still have close candidates after all 48 questions. The audit retains these close cases rather than discarding them. This distribution is not a target population distribution or an accuracy measure.

`scripts/test-narrative-backend.mjs` checks every new witness, actual 32-item preservation, axis counts, adaptive replay, malformed input rejection, and compatibility with both earlier narrative versions and the original core-only form.

Shortening from 12 to 8 items per axis reduces measurement information. Neither equivalence to the previous form nor psychometric validity has been established. Those questions require real participant data and appropriate reliability, retest and construct-validity studies. Fictional role associations remain editorial and cannot be presented as validated personality classes.
