import type { CSSProperties } from "react";
import PhoneFrame from "@/components/phone-frame";
import FloatingCard from "@/components/floating-card";
import TiltGroup from "@/components/tilt-group";

type Placement = {
  top: string;
  left: string;
  width: string;
  rotate: number;
};

type ScreenProps = {
  src: string;
  alt: string;
};

type CardProps = ScreenProps & {
  width: number;
  height: number;
  placement: Placement;
};

export default function ScreenComposition({
  primary,
  primaryPlacement,
  secondary,
  secondaryPlacement,
  card,
  aspect = "1 / 1",
  interactive = false,
  className = "",
  preload = false,
}: {
  primary: ScreenProps;
  primaryPlacement: Placement;
  secondary?: ScreenProps;
  secondaryPlacement?: Placement;
  card?: CardProps;
  aspect?: string;
  interactive?: boolean;
  className?: string;
  preload?: boolean;
}) {
  const content = (
    <div className="relative h-full w-full" style={{ aspectRatio: aspect }}>
      {secondary && secondaryPlacement && (
        <PhoneFrame
          src={secondary.src}
          alt={secondary.alt}
          width={secondaryPlacement.width}
          className="animate-float-b absolute"
          style={
            {
              top: secondaryPlacement.top,
              left: secondaryPlacement.left,
              zIndex: 1,
              "--r": `${secondaryPlacement.rotate}deg`,
            } as CSSProperties
          }
        />
      )}
      <PhoneFrame
        src={primary.src}
        alt={primary.alt}
        width={primaryPlacement.width}
        preload={preload}
        className="animate-float-a absolute"
        style={
          {
            top: primaryPlacement.top,
            left: primaryPlacement.left,
            zIndex: 2,
            "--r": `${primaryPlacement.rotate}deg`,
          } as CSSProperties
        }
      />
      {card && (
        <FloatingCard
          src={card.src}
          alt={card.alt}
          width={card.width}
          height={card.height}
          className="animate-float-b absolute"
          style={
            {
              top: card.placement.top,
              left: card.placement.left,
              width: card.placement.width,
              zIndex: 3,
              "--r": `${card.placement.rotate}deg`,
            } as CSSProperties
          }
        />
      )}
    </div>
  );

  if (interactive) {
    return <TiltGroup className={className}>{content}</TiltGroup>;
  }
  return <div className={className}>{content}</div>;
}
