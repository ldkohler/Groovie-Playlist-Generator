import React from "react";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function SpotifyLogin() {
    return (
        <div className="login-wrapper">
        <h1 id="title-mini" className="transform -translate-y-7 translate-x-1"><strong>SpotiFilm</strong></h1>
        <span className="sub-mini translate-y-16 translate-x-1">PLAYLIST GENERATOR</span>

        <img src="/images/SpotifyLogo.svg" 
            className="translate-y-36"
        alt="Spotify Logo"/>

        <p className="w-full tracking-wide translate-y-40"> CONNECT YOUR SPOTIFY ACCOUNT SO SPOTIFILM PLAYLIST GENERATOR CAN DISCOVER YOUR MUSIC TASTE. </p>

        <div className="translate-y-52">
                <Link to='/' className='btn btn-lg btn-outline btn-spotify tracking-wide w-login rounded-full text-xl font-noto-sans'>
                <FaSpotify className="text-3xl" />{'\u00A0'}CONNECT WITH SPOTIFY
                </Link>
            </div>
        
            <div className="translate-y-90">
            <Footer />
            </div>
        </div>
        
                
     );
    }

export default SpotifyLogin;