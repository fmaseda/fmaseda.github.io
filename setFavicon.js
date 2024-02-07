const faviconEl = document.querySelector('link[rel="icon"]')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', () => setFavicon(mediaQuery))

// Set initial favicon
setFavicon(mediaQuery)

function setFavicon(mediaQuery) {
  const icon = mediaQuery.matches ? 'Icons/DeadlineAppIconDark_rgba.png' : 'Icons/DeadlineAppIcon_rgba.png';
  faviconEl.setAttribute('href', icon);
}