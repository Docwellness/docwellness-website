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
}: {
  src: string;
  alt: string;
  width: number | string;
  className?: string;
  style?: CSSProperties;
  imgSizes?: string;
  preload?: boolean;
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
      </div>
    </div>
  );
}
