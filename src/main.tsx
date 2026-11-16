import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { installRipple } from './lib/ripple';

installRipple();

/**
 * Show the site bigger, up to 140%, but only as much as fits: the page always keeps at least
 * 1000 px of room, so the zoom never makes the layout switch to the phone version.
 */
const MAX_ZOOM = 1.4;
const MIN_ROOM = 1000;
function fitZoom() {
  const z = Math.max(1, Math.min(MAX_ZOOM, window.innerWidth / MIN_ROOM));
  document.documentElement.style.setProperty('--zoom', z.toFixed(3));
}
fitZoom();
window.addEventListener('resize', fitZoom);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
