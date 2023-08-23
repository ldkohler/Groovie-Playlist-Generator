import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import blobs from "blobs";

const options = {
  complexity: 0.6,
  contrast: 0.6,
  guides: false,
  size: 600,
  color: "hsl(6.13, 73.23%, 49.8%)",
  stroke: 0
};

const Blob1 = () => {
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
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" id="blobSvg" style={{ position: 'absolute', top: 0, right: 100, bottom: 0, left: 0, margin: 'auto', zIndex: 1, opacity: 1, width: '60%', height: '60%', pointerEvents: "none" }}>
      <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(235, 178, 70)" }}></stop>
            <stop offset="100%" style={{ stopColor: "rgb(228, 59, 192)" }}></stop>
          </linearGradient>
  
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <animated.path id="blob" fill="url(#gradient)" style={{ opacity: 1, filter: 'url(#glow)', pointerEvents: "visiblePainted" }}
          d={blobSpring.d}
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
        />
      </svg>
    );
};

export default Blob1;
