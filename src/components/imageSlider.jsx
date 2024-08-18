import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/assets/001.jpg" alt="Slide 1" height="400px" />
        </div>
        <div className="embla__slide">
          <img src="../src/assets/002.jpg" alt="Slide 2" height="400px" />
        </div>
        <div className="embla__slide">
          <img src="/assets/003.jpg" alt="Slide 3" height="400px" />
        </div>
      </div>
    </div>
  );
}
