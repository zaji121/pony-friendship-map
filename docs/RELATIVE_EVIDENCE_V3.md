# 48-total form v3: relative action evidence

2026-10-30. Experimental content recommendation; not an MBTI instrument, validated character classifier, or probability model. The 32 framework questions, four-axis percentages, 48 total slots, original entrance and complete reports are preserved.

## Content and matching changes

Four more existing activity slots (3, 7, 11, 12) compare concrete motivations and follow-through in shared situations. Expressing a performance, fitting a crafted item, enabling group participation and providing individual support are observed separately and recur across chapters. No option directly assigns a named pony.

For each answered task, a candidate's overlap with each offered action is computed from the shared trait annotations. Squaring the overlap fraction gives a full action cluster more support than a single broadly shared tag. The selected action is compared with the mean of the available actions. This corrects for an opportunity baseline; not choosing an action means lower priority in that particular scene, not dislike. Unanswered tasks are omitted.

The sum of these relative supports is divided by the square root of their within-item opportunity variances and mapped through `0.5 + 0.5*tanh(score/2)`. This is a heuristic content score, not a z-test, likelihood, calibrated probability or established psychometric scale. The scale parameter 2 is an initial product parameter, not fitted to participants or tuned to role quotas.

Candidates with positive support in at least two different chapters and two trait categories are considered before candidates lacking that support. The same requirement applies to every role. If none qualifies, a candidate can still be shown but is explicitly marked as having insufficient cross-context evidence. A wholly uninformative response is not assigned a character.

The core pattern's cosine denominator uses `sqrt(norm^2 + 0.25^2)`, preventing a tiny deviation from the midpoint from having the strength of a highly one-sided pattern. The 0.25 regularizer represents two of the eight-item proportion steps, but this rationale does not establish empirical reliability. Displayed four-axis percentages are unchanged. Initial framework/task weights remain 60/40.

The final two slots remain inside the 48-question total. Main-six pairs can use the existing shared-situation contrasts. Other pairs prioritize trait differences across the top five candidates, using a similarity-weighted spread heuristic. These weights are not posterior probabilities or calibrated information gain. Repeated contrasts are avoided. `both` and `unknown` record the response but contribute no directional points; they cannot accumulate positive support for both candidates.

## Compatibility and checks

- The server retains form v1 and v2 plus both older narrative editions and the original core-only scorer. Historical saved results are not recomputed.
- All 36 roles have strict first-place witnesses under the actual ordering, including the cross-context eligibility condition. The audit objective includes that condition, rather than incorrectly testing only raw similarity.
- Tests cover neutral answers, no-signal cases, midpoint damping, chapter support, true displayed-answer explanations, adaptive replay, single-answer validation and both orientations of all 15 main-six contrasts.
- Mobile and desktop complete-flow tests cover the original Derpy entrance, 48 single-choice questions, cloud-style result reopening, character profiles, all 36 cards and retaking.

## Comparison, including regressions

The same independent-uniform random ordinal stream was used for 20,000 synthetic runs. Because item text changes, identical ordinals do not mean identical semantic decisions by real people. Close threshold remains 0.03; close trials are not discarded.

|Metric|v2|v3|
|---|---:|---:|
|Sweetie Belle first-candidate share|8.455%|4.660%|
|Daring Do first-candidate share|6.225%|3.815%|
|Close-candidate share|42.425%|38.295%|
|Main-six combined share|26.990%|15.835%|
|Strict synthetic role witnesses|36/36|36/36|

In an additional 2,000-run paired synthetic sensitivity check, changing one core answer changed the first candidate in 34.6% of v2 cases and 28.1% of v3 cases. Changing one task answer changed it in 14.4% and 20.25%, respectively. The already-asked final contrasts were held fixed. Greater task sensitivity is a limitation, not evidence of improved accuracy; lower core sensitivity can also indicate under-responsiveness. These are not participant retest estimates.

The reduction in concentration does not establish better identity classification. Main-six share regresses relative to the previous product preference, and task sensitivity rises. No character-specific bonus or equalization quota was introduced to hide these results. The change remains on the narrative trial entry; the default core-only route and historical results remain intact. Participant studies and independently judged content cases are still required to assess validity.

Full outputs: `narrative-form-48-audit.json`, `narrative-form-48-v2-baseline.json`, and `relative-evidence-comparison.json`.
