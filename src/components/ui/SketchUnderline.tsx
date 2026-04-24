interface SketchUnderlineProps {
  color?: string;
  opacity?: number;
  strokeWidth?: number;
  /** "wide" = viewBox 200×8 (h1 hero), "narrow" = viewBox 100×8 (sections) */
  variant?: "wide" | "narrow";
}

export function SketchUnderline({
  color = "#3d5a80",
  opacity = 0.4,
  strokeWidth = 2,
  variant = "narrow",
}: SketchUnderlineProps) {
  if (variant === "wide") {
    return (
      <svg
        className="absolute -bottom-1 left-0 w-full h-2"
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
      >
        <path
          d="M0 4 Q50 0 100 4 T200 4"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          opacity={opacity}
        />
      </svg>
    );
  }

  return (
    <svg
      className="absolute -bottom-1 left-0 w-full h-2"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
    >
      <path
        d="M0 4 Q25 0 50 4 T100 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
    </svg>
  );
}
