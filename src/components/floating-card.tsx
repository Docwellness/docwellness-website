import Image from "next/image";
import type { CSSProperties } from "react";

export default function FloatingCard({
  src,
  alt,
  width,
  height,
  className = "",
  style,
  imgSizes = "220px",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  imgSizes?: string;
}) {
  return (
    <div
      className={className}
      style={{
        filter: "drop-shadow(0 18px 30px rgba(75,10,45,0.22))",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={imgSizes}
        className="h-auto w-full"
      />
    </div>
  );
}
