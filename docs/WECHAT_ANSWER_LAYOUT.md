# Embedded webview answer sizing — 2026-11-01

The user reported oversized answer cards inside iOS WeChat while a standalone browser looked normal. The previous shared-height calculation inserted offscreen DOM text and used the tallest measured block for the entire question bank. That allowed a hidden-text layout difference to enlarge every visible option.

The replacement measures glyph widths with Canvas `measureText` using the visible answer's computed font, line height, letter spacing and available width. It reserves the same bank-wide height across question changes and selection. The quiz subtree explicitly inherits consistent 100% text-size adjustment. Larger explicitly configured font sizes still receive enough space; pinch zoom is not disabled.

References used for implementation:

- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-size-adjust
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText

## Verification

- `scripts/test-quiz-webview-layout.cjs`: 320, 375, 390, 393 and 430 CSS-pixel widths, iOS/Android WeChat user agents, separately inflated hidden text, 130% visible option font, full fixed/adaptive option bank, selected/next states, viewport resize and no horizontal overflow.
- Under an intentionally injected hidden-block font of 38px/60px, the previous implementation increased a 390px viewport's normal 82px option row to 391px. The new implementation retains 82px with or without that hidden-block inflation. This demonstrates the old mechanism's vulnerability; it does not prove the exact private behavior of the user's WeChat instance.
- `scripts/test-product-flow.cjs`: full 48-question mobile/desktop product flow, stable answer sizes, original chapter dialogs, result rendering, 36-role gallery, sharing, image export, Gummy, reload, retake and admin entry passed.
- Mobile preview: `tmp/wechat-answer-panel.png`.

The automated tests use browser emulation and injected layout conditions. They are not a real-device WeChat test. No questions, scores, matching rules, saved answers or results were changed.
