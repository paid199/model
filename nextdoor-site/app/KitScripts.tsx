'use client';

import { useEffect } from 'react';

// The kit's module scripts, in the order assets/starter.html loads them. They run after
// hydration, so React never sees the nodes they add (pause buttons, the phone sheet, moments).
const SCRIPTS = [
  '/assets/system.js',
  '/assets/motion/motion.js',
  '/assets/layout/layout.js',
];

export default function KitScripts() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of SCRIPTS) {
        if (cancelled || document.querySelector(`script[src="${src}"]`)) continue;
        await new Promise<void>((resolve) => {
          const s = document.createElement('script');
          s.type = 'module';
          s.src = src;
          s.onload = () => resolve();
          s.onerror = () => resolve();
          document.body.appendChild(s);
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return null;
}
