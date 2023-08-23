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

const Blob3 = () => {
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
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" id="blobSvgRight" style={{ position: 'absolute', top: 0, right: 0, bottom: 50, left: 300, margin: 'auto', zIndex: -1, opacity: 1, width: '55%', height: '55%' }}>
    <defs>
    <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style={{ stopColor: "#4EFFF6" }}></stop> // Turquoise at top left
    <stop offset="33%" style={{ stopColor: "#1DD4CF" }}></stop> // Dark turquoise at one-third of the way
    <stop offset="66%" style={{ stopColor: "#0D5BB8" }}></stop> // Royal blue at two-thirds of the way
    <stop offset="100%" style={{ stopColor: "#19369E" }}></stop> // Dark blue at bottom right
  </linearGradient>
  
        <filter id="glowRight">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <animated.path id="blobRight" fill="url(#gradientRight)" style={{ opacity: 1, filter: 'url(#glowRight)' }}
        d={blobSpring.d}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
      />
    </svg>
  );
};

export default Blob3;
