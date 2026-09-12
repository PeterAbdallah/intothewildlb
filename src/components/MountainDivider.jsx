// A simple line-drawn mountain silhouette used as a quiet section divider.
// "tone" controls the stroke color so it can sit on light or dark sections.
export default function MountainDivider({ tone = 'var(--color-forest)' }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      width="100%"
      height="36"
      aria-hidden="true"
      focusable="false"
    >
      <polyline
        points="0,50 150,20 260,42 380,10 520,44 650,18 800,46 930,15 1060,40 1200,22"
        fill="none"
        stroke={tone}
        strokeWidth="2"
        opacity="0.35"
      />
    </svg>
  )
}
