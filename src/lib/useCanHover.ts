import { useEffect, useState } from 'react';

function detectCanHover(): boolean {
  if (typeof window === 'undefined') return true;

  // Primary signal: does the device's primary pointer support hover?
  const mqSupportsHover =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(hover: hover) and (pointer: fine)').matches
      : true;

  // Secondary signal: touch capability. Some browsers/devices report
  // hover:hover unreliably (e.g. certain Android WebViews), so if the
  // device clearly supports touch, treat it as a non-hover device even
  // if the media query claims otherwise.
  const hasTouch =
    typeof navigator !== 'undefined' &&
    (('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) ||
      'ontouchstart' in window);

  return mqSupportsHover && !hasTouch;
}

/**
 * True when the device's primary input supports hover (mouse/trackpad).
 * False on touch-primary devices, where we fall back to timer-based cycling.
 */
export function useCanHover() {
  const [canHover, setCanHover] = useState<boolean>(detectCanHover);

  useEffect(() => {
    // Re-check on mount too, in case SSR/hydration guessed differently.
    setCanHover(detectCanHover());

    if (typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handler = () => setCanHover(detectCanHover());
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return canHover;
}
