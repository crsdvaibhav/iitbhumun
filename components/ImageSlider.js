import React from "react";
import { useState } from "react";
import Image from "next/image";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";

export default function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const leftArrowStyles = {
    position: "absolute",
    margin : "auto",
    justifyContent : "center",
    alignItems : "center",
    left: "0px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
   margin : "auto",
   justifyContent : "center",
    right: "0px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

//   const slideStyles = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//   };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        {"<"}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        {">"}
      </div>
      <div className="flex-row flex-wrap">
      <div style={leftArrowStyles} onClick={goToPrevious}>
        {"<"}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        {">"}
      </div>
        <Image
          height={500}
          width={910}
          src={props.slides[currentIndex].source}
          alt="This is an image."
        />
        {/* <div style={dotsContainerStyles}>
          {props.slides.map((slide, slideIndex) => (
            <div
              id="slidebtn"
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              O
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
