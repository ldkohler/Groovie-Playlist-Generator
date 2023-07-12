import React, { useEffect, useRef, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import { motion } from "framer-motion"
import useLockScrollAtBottom from "../utils/useLockScrollAtBottom";





function handleButtonClick() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

function Home() {
    useLockScrollAtBottom();

    return (
        <div className="page-wrapper z-0">
            <div id="content" class="first">
                
                <h1 id="title" className="transform translate-y-6"><strong>SpotiFilm</strong></h1>
                <span className="sub">PLAYLISTS</span>
                <span className="home-text uppercase transform translate-y-44">Personalized Playlists, Cinematic Vibes</span>
                <div className="home-buttons transform translate-y-44">
                <motion.img 
            src="/images/FilmReel.svg"
            onClick={handleButtonClick}
            className="cursor-pointer"
            animate={{ 
              rotate: [0, 360], 
              y: ["0%", "-80%", "0%"]  // Adjust these values to change the size of the bounce
            }}
            transition={{
              rotate: { 
                repeat: Infinity, 
                duration: 5,  // Adjust this value to change the speed of the spin
                ease: "linear" 
              },
              y: { 
                repeat: Infinity, 
                duration: 2,  // Adjust this value to change the speed of the bounce
                ease: "easeInOut"
              }
            }}
          />
            </div>
            </div>
            <div class="second">
                <Carousel />
            </div>
        </div>
    );
}

export default Home;