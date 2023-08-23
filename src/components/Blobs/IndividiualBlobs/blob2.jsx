import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import blobs from "blobs";

const options = {
  complexity: 0.9,
  contrast: 0.4,
  guides: false,
  size: 600,
  color: "hsl(275, 100%, 43.7%)",
  stroke: 0
};

const OtherBlob = () => {
  const [blob, setBlob] = useState(blobs.editable(options));
  const [isHovered, setHovered] = useState(false);

  const blobSpring = useSpring({
    config: { duration: isHovered ? 750 : 4500 },
    from: {
      d: blob.children[0].children[0].attributes.d
    },
    to: async (next) => {
      while (1) {
        await next({
          d: blobs.editable(options).children[0].children[0].attributes.d
        });
      }
    }
  });

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" id="blobSvgOther" style={{ position: 'absolute', top: 0, right: 300, bottom: 50, left: 0, margin: 'auto', zIndex: 0, opacity: 1, width: '50%', height: '60%', pointerEvents: "none" }}>
      <defs>
          <linearGradient id="gradientOther" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#ff057c" }}></stop>
            <stop offset="25%" style={{ stopColor: "#800f86" }}></stop>
            <stop offset="50%" style={{ stopColor: "#1619b9" }}></stop>
            <stop offset="75%" style={{ stopColor: "#1ba8e9" }}></stop>
            <stop offset="100%" style={{ stopColor: "#ff057c" }}></stop>
          </linearGradient>
  
          <filter id="glowOther">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <animated.path id="blobOther" fill="url(#gradientOther)" style={{ opacity: 1, filter: 'url(#glowOther)', pointerEvents: "visiblePainted" }}
          d={blobSpring.d}
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
        />
      </svg>
    );
};

export default OtherBlob;
