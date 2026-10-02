"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxContextValue = {
  openLightbox: (images: LightboxImage[], startIndex?: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return ctx;
}

export default function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openLightbox = useCallback((imgs: LightboxImage[], startIndex = 0) => {
    if (imgs.length === 0) return;
    setImages(imgs);
    setIndex(Math.min(Math.max(startIndex, 0), imgs.length - 1));
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);
  const showNext = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const showPrev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, showNext, showPrev]);

  const current = images[index];

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}

      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-5 bg-[#1a0611]/85 p-6 backdrop-blur-sm"
          style={{ animation: "lightbox-fade 220ms var(--ease-out)" }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous screen"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-5"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next screen"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5"
              >
                ›
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full flex-col items-center gap-4"
          >
            <div
              className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-[#2a2a2e] to-[#18181b] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
              style={{ height: "min(72vh, 680px)", aspectRatio: "9 / 19.5" }}
            >
              <div className="absolute left-1/2 top-[1.3%] z-10 h-[1.5%] w-[17%] -translate-x-1/2 rounded-full bg-[#0d0d0f]" />
              <div className="absolute inset-[2.2%] overflow-hidden rounded-[2rem] bg-black">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="420px"
                  preload
                  className="object-cover object-top"
                />
              </div>
            </div>

            <p className="max-w-md text-center text-sm text-white/80">{current.alt}</p>

            {images.length > 1 && (
              <div className="flex items-center gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex(i);
                    }}
                    aria-label={`Go to screen ${i + 1} of ${images.length}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
