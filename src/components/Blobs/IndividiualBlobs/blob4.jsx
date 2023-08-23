import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import blobs from "blobs";

const options = {
  complexity: 0.9,
  contrast: 0.25,
  guides: false,
  size: 600,
  color: "hsl(240, 100%, 13%)",
  stroke: 0
};

const Blob4 = () => {
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
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" id="blobSvgDeep" style={{ position: 'absolute', top: 0, right: 125, bottom: 275, left: 75, margin: 'auto', zIndex: 2, opacity: 1, width: '35%', height: '35%', pointerEvents: "none" }}>
    <defs>
        <linearGradient id="gradientDeep" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(0, 1, 66)" }}></stop> // Dark color at 0% (top)
          <stop offset="100%" style={{ stopColor: "rgb(65, 8, 192)" }}></stop> // Light color at 100% (bottom)
        </linearGradient>

        <filter id="glowDeep">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <animated.path id="blobDeep" fill="url(#gradientDeep)" style={{ opacity: 1, filter: 'url(#glowDeep)', pointerEvents: "visiblePainted" }}
        d={blobSpring.d}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
      />
    </svg>
  );
};

export default Blob4;
