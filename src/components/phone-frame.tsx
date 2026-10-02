import Image from "next/image";
import type { CSSProperties } from "react";

export default function PhoneFrame({
  src,
  alt,
  width,
  className = "",
  style,
  imgSizes = "220px",
  preload = false,
  onClick,
}: {
  src: string;
  alt: string;
  width: number | string;
  className?: string;
  style?: CSSProperties;
  imgSizes?: string;
  preload?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={className}
      style={{
        width,
        aspectRatio: "9 / 19.5",
        borderRadius: "8% / 4%",
        background: "linear-gradient(160deg, #2a2a2e 0%, #18181b 100%)",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.08), 0 20px 40px -10px rgba(75,10,45,0.35), 0 8px 20px rgba(0,0,0,0.25)",
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "16%",
            height: "1.6%",
            borderRadius: "999px",
            background: "#0d0d0f",
            zIndex: 20,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "3.5%",
            top: "2%",
            width: "93%",
            height: "96%",
            borderRadius: "5.5% / 2.6%",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={imgSizes}
            preload={preload}
            className="object-cover object-top"
          />
        </div>

        {onClick && (
          <button
            type="button"
            onClick={onClick}
            aria-label={`View ${alt} full size`}
            style={{ borderRadius: "8% / 4%" }}
            className="group absolute inset-0 z-30 cursor-pointer appearance-none border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            <span
              style={{ borderRadius: "8% / 4%" }}
              className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
            />
            <span className="absolute bottom-[6%] left-1/2 flex w-max -translate-x-1/2 translate-y-2 items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-brand-primary opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden>
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M13 13L17.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              View screen
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
