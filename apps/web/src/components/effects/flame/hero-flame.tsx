"use client";

import { useEffect, useRef } from "react";
import data from "./hero-flame-data.json";

function setIntervalOnVisible({
  element,
  callback,
  interval,
  threshold = 0.01,
}: {
  element?: HTMLElement | null;
  callback: () => void;
  interval: number;
  threshold?: number;
}) {
  if (!element) return;

  let intervalId: ReturnType<typeof setInterval> | null = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!intervalId) {
            intervalId = setInterval(callback, interval);
          }
        } else {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      });
    },
    { threshold }
  );

  observer.observe(element);

  return () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    observer.disconnect();
  };
}

export default function HeroFlame({ absolute }: { absolute?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;

    const interval = setIntervalOnVisible({
      element: wrapperRef.current,
      callback: () => {
        index++;
        if (index >= data.length) index = 0;

        if (ref.current) {
          ref.current.innerHTML = data[index];
        }

        if (ref2.current) {
          ref2.current.innerHTML = data[index];
        }
      },
      interval: 85,
    });

    return () => interval?.();
  }, []);

  const wrapperClass = absolute
    ? "cw-686 h-190 top-408 absolute flex gap-16 pointer-events-none select-none lg-max:hidden"
    : "w-[786px] h-[190px] mx-auto flex gap-16 pointer-events-none select-none";

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      <div className="relative flex-1 overflow-clip">
        <div
          className="fc-decoration absolute bottom-0 -left-380 font-ascii text-black-alpha-20"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static local ASCII-art JSON with no user input, required for initial flame frame
          dangerouslySetInnerHTML={{ __html: data[0] }}
          ref={ref}
          style={{
            whiteSpace: "pre",
            fontSize: "9px",
            lineHeight: "11px",
          }}
        />
      </div>

      <div className="relative flex-1 overflow-clip">
        <div
          className="fc-decoration absolute -right-380 bottom-0 -scale-x-100 font-ascii text-black-alpha-20"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static local ASCII-art JSON with no user input, required for initial flame frame
          dangerouslySetInnerHTML={{ __html: data[0] }}
          ref={ref2}
          style={{
            whiteSpace: "pre",
            fontSize: "9px",
            lineHeight: "11px",
          }}
        />
      </div>
    </div>
  );
}
