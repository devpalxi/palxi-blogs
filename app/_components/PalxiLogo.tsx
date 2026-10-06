// The Palxi wordmark, redrawn as strokes in the four logo colours. This is an
// indicative recreation; swap in the master SVG artwork when it is supplied.
// Per DESIGN.md the logo colours appear nowhere else in the interface.
export function PalxiLogo({ height = 28 }: { height?: number }) {
  const stroke = {
    fill: "none",
    strokeWidth: 7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  return (
    <svg
      viewBox="0 0 124 36"
      height={height}
      width={(height * 124) / 36}
      role="img"
      aria-label="Palxi"
      focusable="false"
    >
      {/* P: rose stem, purple bowl */}
      <path d="M9 6 V30" stroke="#c56d93" {...stroke} />
      <path d="M9 6 H19 a8 8 0 0 1 0 16 H9" stroke="#9861a5" {...stroke} />
      {/* A: teal arch, lime crossbar */}
      <path d="M35 30 V17 a10 10 0 0 1 20 0 V30" stroke="#47a7b5" {...stroke} />
      <path d="M35 24 H55" stroke="#a9c31a" {...stroke} />
      {/* L: rose stem, teal foot */}
      <path d="M66 6 V30" stroke="#c56d93" {...stroke} />
      <path d="M66 30 H82" stroke="#47a7b5" {...stroke} />
      {/* X: purple */}
      <path d="M90 6 L108 30 M108 6 L90 30" stroke="#9861a5" {...stroke} />
      {/* I: rose */}
      <path d="M118 6 V30" stroke="#c56d93" {...stroke} />
    </svg>
  );
}
