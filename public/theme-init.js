/* Inline theme bootstrap: apply persisted theme before paint to avoid flash. */
(function () {
  try {
    var stored = localStorage.getItem('theme')
    var prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    var theme = stored || (prefersDark ? 'dark' : 'light')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } catch {
    /* ignore */
  }
})()
