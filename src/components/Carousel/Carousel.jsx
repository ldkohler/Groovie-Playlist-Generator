import React from "react";

function Carousel() {
  return (
    <div className="carousel carousel-center w-screen p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1018/400/300" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1025/400/300" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1035/400/300" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1040/400/300" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1050/400/300" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1060/400/300" className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/id/1070/400/300" className="rounded-box" />
      </div>
    </div>
  );
}

export default Carousel;
