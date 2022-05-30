import { useState } from "react";
import Image from "next/image";

export default function Carousel(props) {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextSlide = () => {
    setActiveIdx((prev) => {
      const k = props.images.length;
      return (((prev + 1) % k) + k) % k;
    });
  };

  const prevSlide = () => {
    setActiveIdx((prev) => {
      const k = props.images.length;
      return (((prev - 1) % k) + k) % k;
    });
  };
  return (
    <div className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {props.images.map((image, idx) => (
          <li key = {idx} className={idx === activeIdx ? "active" : ""}></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {props.images.map((image, idx) => (
          <div
            key = {idx} className={"carousel-item " + (idx === activeIdx ? "active" : "")}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        role="button"
        onClick={() => prevSlide()}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        role="button"
        onClick={() => nextSlide()}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
