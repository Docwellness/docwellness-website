"use client";

import { useEffect, useRef, useState } from "react";

export default function FeatureNav({ items }: { items: { id: string; title: string }[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const container = navRef.current;
    const activeButton = container?.querySelector<HTMLButtonElement>(`[data-id="${activeId}"]`);
    if (!container || !activeButton) return;

    // Scroll only the pill bar's own horizontal axis — scrollIntoView here would
    // also hijack the page's vertical scroll, since this container can't scroll
    // vertically itself and the browser falls back to the document for that axis.
    const target =
      activeButton.offsetLeft - (container.clientWidth - activeButton.clientWidth) / 2;
    container.scrollTo({ left: Math.max(target, 0), behavior: "smooth" });
  }, [activeId]);

  return (
    <div className="sticky top-[57px] z-30 -mx-6 border-b border-brand-border bg-white/90 px-6 backdrop-blur sm:top-[65px]">
      <div
        ref={navRef}
        className="mx-auto flex max-w-6xl snap-x gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              data-id={item.id}
              aria-current={active}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className={`snap-start whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                active
                  ? "bg-brand-primary text-white"
                  : "bg-brand-primary-light text-brand-text-secondary hover:text-brand-primary"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
