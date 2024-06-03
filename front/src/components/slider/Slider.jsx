import React, { useState, useRef } from "react";
import "./Slider.scss";

const Slider = ({ language }) => {
  const [slides, setSlides] = useState([
    {
      title: { fr: "coccinelle", en: "", ar: "" },
      color: "#B94014",
      active: 0,
      img: "IMG_20240503_095557.jpg",
    },
    {
      title: { fr: "Chrysope Verte", en: "", ar: "" },
      color: "#10170D",
      active: 0,
      img: "IMG_20240503_095942.jpg",
    },
    {
      title: { fr: "Dasysyrphus", en: "", ar: "" },
      color: "#EFF18F",
      active: 0,
      img: "IMG_20240518_094752.jpg",
    },
    {
      title: { fr: "Abricot", en: "", ar: "" },
      color: "#F4935F",
      active: 0,
      img: "L11A12 3 076.jpg",
    },
    {
      title: { fr: "Tomate", en: "", ar: "" },
      color: "#792521",
      active: 0,
      img: "371148550_194060910353349_2673705428630603414_n.jpg",
    },
    {
      title: { fr: "Cerise", en: "", ar: "" },
      color: "#E00711",
      active: 0,
      img: "IMG_20180527_110614.jpg",
    },
    {
      title: { fr: "Aubergine", en: "", ar: "" },
      color: "#3E670B",
      active: 0,
      img: "IMG_20180215_120330_HDR.jpg",
    },
  ]);
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const swipe = (dir) => {
    if (dir === "prev") {
      if (index > 0) {
        setIndex((prev) => prev - 1);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = `-${index * 101}%`;
          containerRef.current.style.backgroundColor = slides[index]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      } else {
        setIndex(slides.length - 1);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = index * 101 + "%";
          containerRef.current.style.backgroundColor = slides[index]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      }
    } else {
      if (index < slides.length - 1) {
        setIndex((prev) => prev + 1);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = `-${(index + 1) * 101}%`;
          containerRef.current.style.backgroundColor = slides[index + 1]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      } else {
        setIndex(0);
        setActive((prev) => !prev);
        setTimeout(() => {
          containerRef.current.style.left = "0%";
          containerRef.current.style.backgroundColor = slides[0]?.color;
        }, 500);
        setTimeout(() => {
          setActive((prev) => !prev);
        }, 1000);
      }
    }
  };
  return (
    <div className="slider">
      <div className="btn btn-prev" onClick={() => swipe("prev")}>
        <svg
          fill="#eee"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 242.13 242.13"
          xmlSpace="preserve"
          stroke="#eee"
          strokeWidth="0.001"
          transform="rotate(45)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.48426600000000003"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_6_"
              d="M237.739,4.394c-5.857-5.857-15.355-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15s-15,6.716-15,15 v53.033c0,8.284,6.716,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82L237.739,25.607 C243.598,19.75,243.598,10.252,237.739,4.394z"
            />{" "}
          </g>
        </svg>
      </div>
      <div className="btn btn-next" onClick={() => swipe("next")}>
        <svg
          fill="#eee"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 242.13 242.13"
          xmlSpace="preserve"
          stroke="#eee"
          strokeWidth="0.001"
          transform="rotate(45)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.48426600000000003"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_6_"
              d="M237.739,4.394c-5.857-5.857-15.355-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15s-15,6.716-15,15 v53.033c0,8.284,6.716,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82L237.739,25.607 C243.598,19.75,243.598,10.252,237.739,4.394z"
            />{" "}
          </g>
        </svg>
      </div>
      <div
        className="container"
        ref={containerRef}
        style={{
          backgroundColor: slides[0]?.color,
          width: slides.length * 100.5 + "vw",
        }}
      >
        {slides.map((slide) => {
          return (
            <div className="slide" key={slide.i}>
              <h1 className={active ? "active" : ""}>
                {slide.title?.[language]}
              </h1>
              <img
                className={active ? "active" : ""}
                src={`/assets/images/${slide.img}`}
                alt={slide.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
