import React from 'react';
import BlazeSlider from 'blaze-slider';

export default function useBlazeSlider(config: any) {
  const sliderRef = React.useRef<BlazeSlider | undefined>();
  const elRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // if not already initialized
    if (!sliderRef.current && elRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, [config]);

  return elRef;
}
