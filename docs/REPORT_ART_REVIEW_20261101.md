# Report artwork and active roster review — 2026-11-01

The administrator preview now chooses both roles from the same active 36-character roster. Its second role is a preview of the closest available profile, not a new assessment result. Saved results containing a retired role display the existing unavailable-result screen instead of substituting an invented role.

The visible cover/profile uses `EXPANDED_ART[slug].file`; career illustrations use `FULLBODY_ART[slug].career`. The regression check compares the bytes of those actual sources, rather than only comparing unused profile-map entries or filenames.

Social images are downloaded native-alpha 2D artwork. The replacement assets do not use AI redraws, screenshot background removal, CSS background camouflage, or checkerboard backgrounds. These are sourced vector-style illustrations and are not represented as untouched official animation screenshots. Source links are retained in the mapping and `ASSET_CREDITS.md`.

Replaced social images: Cadance/Twilight, Shining Armor/Twilight, Diamond Tiara/Silver Spoon, Discord/Fluttershy, Sunburst/Starlight, Bright Mac/Pear Butter. Big Mac now has two separate complete-body illustrations for the cover/profile and career slots. Chrysalis, Sombra, Diamond Tiara, and Sugar Belle also receive separate career illustrations. Other report artwork keeps its existing mapping.

Validation:

- `scripts/test-admin-active-roster.cjs`: all 36 administrator previews, active and distinct primary/secondary, gallery badge agrees.
- `scripts/test-report-roster-and-art.cjs`: actual cover and career artwork differs for all 36; every active social image has alpha transparency; replacement corners are transparent; mobile and desktop screenshot checks for Big Mac.
- Visual review on light and colored backgrounds is required in addition to alpha checks: alpha alone cannot detect background pieces left inside a cutout.

The matching model, question edition, and reported simulation distribution are unchanged by this asset update.
