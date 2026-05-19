"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Wraps the app with framer-motion's LazyMotion provider using only the
 * domAnimation feature set (opacity, translate, viewport – no drag/layout).
 * Saves ~30-40KB vs importing the full motion bundle.
 * All animated components must use `m.*` instead of `motion.*`.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
