const AnimatedSVG = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 30 30'
    xmlns='http://www.w3.org/2000/svg'
  >
    {/* Layer 1 (Static Centered) */}
    <rect
      width='11'
      height='11'
      x='9.375'
      y='9.375'
      rx='5.625'
      ry='5.625'
      fill='#15FF5B' // Solid green
    />

    {/* Layer 2 (Breathing Animation) */}
    <rect
      width='18'
      height='18'
      x='6'
      y='6'
      rx='9'
      ry='9'
      fill='#15FF5B' // Lighter green
      opacity='0.3'
    >
      <animate
        attributeName='opacity'
        values='0.3;0.5;0.3'
        dur='2s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='width'
        values='18;20;18'
        dur='2s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='height'
        values='18;20;18'
        dur='2s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='x'
        values='6;5;6'
        dur='2s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='y'
        values='6;5;6'
        dur='2s'
        repeatCount='indefinite'
      />
    </rect>
  </svg>
);

export default AnimatedSVG;
