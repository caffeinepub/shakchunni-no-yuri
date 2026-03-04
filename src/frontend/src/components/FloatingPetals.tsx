import { useMemo } from "react";

interface PetalConfig {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
  opacity: number;
  hue: number;
}

interface FloatingPetalsProps {
  count?: number;
  accentHue?: number;
}

export function FloatingPetals({
  count = 12,
  accentHue = 155,
}: FloatingPetalsProps) {
  const petals = useMemo<PetalConfig[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 8.3 + 3) % 100}%`,
      animationDuration: `${12 + ((i * 3) % 10)}s`,
      animationDelay: `${(i * 1.7) % 14}s`,
      size: 5 + ((i * 3) % 8),
      opacity: 0.2 + (i % 5) * 0.08,
      hue: accentHue + ((i % 3) - 1) * 15,
    }));
  }, [count, accentHue]);

  return (
    <div className="petal-container" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            opacity: petal.opacity,
            background: `oklch(0.88 0.06 ${petal.hue} / ${petal.opacity + 0.1})`,
            borderRadius: petal.id % 3 === 0 ? "50% 0 50% 0" : "50% 50% 0 50%",
          }}
        />
      ))}
    </div>
  );
}
