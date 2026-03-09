"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

type WindowWithIdleCallbacks = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const AOS_OPTIONS: Aos.AosOptions = {
  once: true,
  offset: 50,
  duration: 800,
  easing: "ease-out-cubic",
};

export function AOSInit() {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  useEffect(() => {
    const run = () => {
      if (!initializedRef.current) {
        AOS.init(AOS_OPTIONS);
        initializedRef.current = true;
        return;
      }

      AOS.refreshHard();
    };

    // Let hydration settle before AOS mutates classes on data-aos elements.
    const idleWindow = window as WindowWithIdleCallbacks;
    if (typeof idleWindow.requestIdleCallback === "function") {
      const idleId = idleWindow.requestIdleCallback(run, { timeout: 500 });
      return () => {
        if (typeof idleWindow.cancelIdleCallback === "function") {
          idleWindow.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = globalThis.setTimeout(run, 120);
    return () => globalThis.clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
