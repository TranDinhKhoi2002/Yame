import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function Image({ to = "", alt = "", width = "300", height = "300", src }) {
  return (
    <Link to={to}>
      <LazyLoadImage
        className="w-full"
        alt={alt}
        width={width}
        height={height}
        src={src}
        effect="opacity"
        delayMethod="debounce"
        delayTime={3000}
      />
    </Link>
  );
}

export default Image;
