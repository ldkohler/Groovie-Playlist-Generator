import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import blobs from "blobs";

const options = {
  complexity: 0.9,
  contrast: 0.2,
  guides: false,
  size: 600,
  color: "hsl(275, 100%, 43.7%)",
  stroke: 0
};

const Blob5 = () => {
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
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" id="blobSvgPurp" style={{ position: 'absolute', top: 0, right: 0, bottom: 50, left: 175, margin: 'auto', zIndex: 0, opacity: 1, width: '30%', height: '30%', pointerEvents: "none" }}>
      <defs>
          <linearGradient id="gradientPurp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="50%" style={{ stopColor: "rgb(124, 0, 222)" }}></stop>
            <stop offset="100%" style={{ stopColor: "rgb(202, 9, 206)" }}></stop>
          </linearGradient>
  
          <filter id="glowPurp">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <animated.path id="blobPurp" fill="url(#gradientPurp)" style={{ opacity: 1, filter: 'url(#glowPurp)', pointerEvents: "visiblePainted" }}
          d={blobSpring.d}
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
        />
      </svg>
    );
};

export default Blob5;
