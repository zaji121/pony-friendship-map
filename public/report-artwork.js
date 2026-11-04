(() => {
  window.setReportArtwork = (img, source, {alternate, eager = false, retryButton, priority} = {}) => {
    const candidates = [...new Set([source, alternate].filter(Boolean))];
    img.loading = eager ? 'eager' : 'lazy';
    img.decoding = 'async';
    if (retryButton || priority) img.setAttribute('fetchpriority', priority || 'high');

    let index = 0;
    let retried = false;
    let pendingTimer;
    const setSource = (url = candidates[index]) => {
      img.dataset.artSource = candidates[index];
      img.src = url;
      if (retryButton) {
        clearTimeout(pendingTimer);
        pendingTimer = setTimeout(() => { retryButton.hidden = false; }, 8000);
      }
    };
    const retrySource = () => {
      retried = true;
      const fresh = new URL(candidates[index], document.baseURI);
      fresh.searchParams.set('retry', Date.now());
      setSource(fresh.href);
    };
    img.addEventListener('load', () => {
      clearTimeout(pendingTimer);
      if (retryButton) retryButton.hidden = true;
    });
    img.addEventListener('error', () => {
      if (!retried) {
        retrySource();
      } else if (index + 1 < candidates.length) {
        index++;
        setSource();
      } else if (retryButton) {
        clearTimeout(pendingTimer);
        retryButton.hidden = false;
      }
    });
    if (retryButton) {
      retryButton.onclick = () => {
        index = 0;
        retryButton.hidden = true;
        retrySource();
      };
    }
    setSource();
  };
})();
