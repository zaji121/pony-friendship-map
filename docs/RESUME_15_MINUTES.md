# Fifteen-minute same-browser recovery

The frontend stores the most recent real quiz or result view in localStorage under `ponyRecentVisit-v1`. This is a same-browser recovery feature, not an account or cross-device synchronization system. It does not alter quiz scoring, role probabilities, cloud results or permanent result links.

Recovery includes question index and answers, edition-specific adaptive progress, chapter-dialog status, result ID and cached payload, result tab, profile-open state, disclosure panels, report hash and scroll position. Opening the original homepage within 15 minutes resumes the last meaningful quiz/result view and skips the entrance animation. Explicit administrator and different result links take precedence.

The checkpoint is written on answers and navigation, debounced during UI/scroll changes, and flushed once when the page becomes hidden or closes. Repeated background/pagehide events do not extend a hidden visit. The active page can remain in use for more than 15 minutes; the recovery window is refreshed by activity or leaving the page. Expired records are removed when read. A new valid attempt clears the expired flag. Existing session-only drafts migrate when opened in the updated frontend.

Pausing with the quiz exit control preserves the draft and offers “继续探索”. Explicit retake clears the recovery snapshot and starts a new attempt. The saved result itself remains in Supabase and can still be opened through its link after the local recovery window expires.

The resume decision is made before the first body paint. For result pages the report hash and exact scroll position are applied after DOM parsing, preventing browser fragment navigation from overriding the saved position. A valid arrival just before the deadline is allowed to finish loading even if loading crosses the expiry time.

Validation:
- Exact 15-minute boundary, malformed snapshots and blocked storage.
- Quiz recovery after tab closure and a fresh browser context carrying only persistent storage, including selected answer, question, scroll and no repeated entrance/chapter.
- Non-destructive quiz exit and continuing the same question.
- Expiry to the initial entrance and explicit retake clearing recovery.
- Offline result recovery with the same profile state, expanded scoring disclosure, report hash and scroll.
- All-characters tab and gallery scroll recovery.
- Full original product flow on mobile and desktop, including 48 adaptive questions, result sharing and PNG export.

The resume module is deliberately defensive if browser storage is unavailable. Recovery requires that the browser retain this site's storage; no recovery token is sent to another site or account service.
