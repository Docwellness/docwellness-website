"use client";

import { useEffect, useState } from "react";
import { ANDROID_PACKAGE, PLAY_STORE_URL } from "@/lib/site";

// Chrome on Android resolves an intent: URL by launching the app with this
// package if it is installed, and otherwise navigating to the fallback URL
// (the Play Store listing) - the one way a web link can tell "installed" from
// "not installed". Other platforms just get the store button.
const INTENT_URL =
  `intent://open#Intent;scheme=docwellness;package=${ANDROID_PACKAGE};` +
  `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;

export default function OpenApp() {
  const [isAndroid, setIsAndroid] = useState<boolean | null>(null);

  useEffect(() => {
    const android = /android/i.test(navigator.userAgent);
    setIsAndroid(android);
    // Auto-attempt when arriving from an email link; the buttons below cover
    // browsers that block a redirect without a tap.
    if (android) window.location.replace(INTENT_URL);
  }, []);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-3 text-center">
      {isAndroid !== false && (
        <a
          href={INTENT_URL}
          className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
        >
          Open the Docwellness app
        </a>
      )}
      <a
        href={PLAY_STORE_URL}
        className="rounded-full border border-brand-border bg-white px-6 py-3 text-sm font-semibold text-brand-text transition-colors hover:border-brand-primary hover:text-brand-primary"
      >
        Get it on Google Play
      </a>
      {isAndroid === false && (
        <p className="text-sm text-brand-text-secondary">
          Docwellness is an Android app. Open this page on your Android phone to continue.
        </p>
      )}
    </div>
  );
}
