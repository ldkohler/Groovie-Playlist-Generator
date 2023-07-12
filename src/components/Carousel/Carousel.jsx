import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // new import

function Carousel() {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleButtonClick = (genre, itemId) => {
    setSelectedGenre(genre);
  
    const item = document.querySelector(itemId);
  
    if (item) {
      item.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const genres = ['Action', 'Horror', 'Romance', 'Fantasy', 'Sci-Fi', 'Western', 'Sports'];

  return (
    <div className="relative w-screen h-screen grid grid-cols-2 items-center">
    <div className="flex flex-col items-center justify-center space-y-10">
        <div className="text-4xl font-noto-sans">What's Your Movie Melody?</div>
        <div className="text-7xl font-noto-sans">
          <strong>{selectedGenre}</strong>
        </div>
        {selectedGenre && (
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            className='btn btn-outline btn-spotify rounded-full w-1/2 text-base font-noto-sans'
          >
          <Link to="/setup">PROCEED</Link>
          </motion.button>
        )}
        </div>
    <div className="flex items-center justify-center">
    <div className="carousel carousel-center max-w-lg p-4 space-x-4 bg-neutral rounded-box">
      <div id="item1" className="carousel-item">
        <img src="https://picsum.photos/id/1018/400/300" className="rounded-box" />
      </div>
      <div id="item2" className="carousel-item">
        <img src="https://picsum.photos/id/1025/400/300" className="rounded-box" />
      </div>
      <div id="item3" className="carousel-item">
        <img src="https://picsum.photos/id/1035/400/300" className="rounded-box" />
      </div>
      <div id="item4" className="carousel-item">
        <img src="https://picsum.photos/id/1040/400/300" className="rounded-box" />
      </div>
      <div id="item5" className="carousel-item">
        <img src="https://picsum.photos/id/1050/400/300" className="rounded-box" />
      </div>
      <div id="item6" className="carousel-item">
        <img src="https://picsum.photos/id/1060/400/300" className="rounded-box" />
      </div>
      <div id="item7" className="carousel-item">
        <img src="https://picsum.photos/id/1070/400/300" className="rounded-box" />
      </div>
    </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 flex justify-between px-10 py-4">
    {genres.map((genre, index) => (
      <a 
        onClick={() => handleButtonClick(genre, `#item${index + 1}`)} 
        className={`btn rounded-full w-24 ${selectedGenre === genre ? "btn-white" : "btn-outline btn-select"}`}
      >
        {genre}
      </a> 
    ))}
      </div>
  </div>
  );
}

export default Carousel;
