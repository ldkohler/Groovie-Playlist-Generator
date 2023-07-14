import React, { useEffect, useRef } from "react";
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

    const bars = useRef([]);

    useEffect(() => {
      bars.current.forEach(item => {
        item.style.animationDuration = `${Math.random() * (0.7 - 0.2) + 0.4}s`;
      });
    }, []);

    return (
        <div className="page-wrapper z-0">
            <div id="content" class="first flex flex-col items-center justify-center">
            <h1 id="title" className="transform -translate-y-44"><strong>SpotiFilm</strong></h1>
            <div className="sound-wave translate-y-36">
            {Array.from({ length: 90 }, (_, i) => 
              <div className="bar" ref={el => bars.current[i] = el} key={i}> 
              
              </div>
            )}
            
          </div>
                
                <span className="sub -translate-y-8">PLAYLIST GENERATOR</span>
                <span className="home-text uppercase transform translate-y-56">Personalized Playlists, Cinematic Vibes</span>
                <div className="home-buttons transform translate-y-52">
                <motion.img 
            src="/images/FilmReel.svg"
            onClick={handleButtonClick}
            className="cursor-pointer"
            animate={{ 
              rotate: [0, 360], 
              y: ["0%", "-50%", "0%"]  // Adjust these values to change the size of the bounce
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