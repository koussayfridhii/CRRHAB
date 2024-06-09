import React, { useState, useRef } from "react";
import "./Slider.scss";
import { useCallApi } from "../../hooks/useCallApi";
import Spinner from "../spinner/Spinner";

const Slider = ({ language }) => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);

  const { data, error, isLoading } = useCallApi("media");

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const swipe = (dir) => {
    setActive((prev) => !prev);

    if (dir === "prev") {
      setIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    } else {
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }

    setTimeout(() => {
      containerRef.current.style.left = `-${index * 101}%`;
      containerRef.current.style.backgroundColor = data[index]?.color;
    }, 500);

    setTimeout(() => {
      setActive((prev) => !prev);
    }, 1000);
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
            <path
              id="XMLID_6_"
              d="M237.739,4.394c-5.857-5.857-15.355-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15s-15,6.716-15,15v53.033c0,8.284,6.716,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82L237.739,25.607C243.598,19.75,243.598,10.252,237.739,4.394z"
            />
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
            <path
              id="XMLID_6_"
              d="M237.739,4.394c-5.857-5.857-15.355-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15s-15,6.716-15,15v53.033c0,8.284,6.716,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82L237.739,25.607C243.598,19.75,243.598,10.252,237.739,4.394z"
            />
          </g>
        </svg>
      </div>
      <div
        className="container"
        ref={containerRef}
        style={{
          backgroundColor: data[0]?.color,
          width: `${data.length * 100.5}vw`,
        }}
      >
        {data.map((slide, i) => (
          <div className="slide" key={i}>
            {/* <h1 className={active ? "active" : ""}>
              {slide.title?.[language]}
            </h1> */}
            <img
              className={active ? "active" : ""}
              src={`${slide.img}`}
              alt={slide.title?.[language]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
