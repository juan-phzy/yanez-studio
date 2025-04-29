"use client";

import { ReactLenis, LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LenisWrapper({ children }: { readonly children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000); // Lenis expects ms
      ScrollTrigger.update(); // Keep ScrollTrigger in sync
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis options={{ autoRaf: false }} root ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
