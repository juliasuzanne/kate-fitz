import { useRef } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Landing() {
  const ref = useRef(null);

  const handleOpenPage = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(handleOpenPage);

  return (
    <div loading="lazy" className="background">
      <div ref={ref} id="scrollto"></div>

      <a href="/home" className="heading-enter">
        enter
      </a>
    </div>
  );
}
