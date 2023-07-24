import React from "react";
import { Link } from "react-router-dom";

function About() {
        return (
          <div className="page-wrapper">
            <div>
            <h1><strong>About</strong></h1>
            <p>
            Groovie is a <em>dynamic playlist generator</em> that curates <em>personalized Spotify playlists</em> inspired 
            by your chosen movie genre and your unique taste. Tailoring a playlist is an
              effortless process, and the final playlist is seamlessly integrated into your Spotify
               account.
            </p>

            <p>
            Each Groovie playlist is one of a kind, expertly woven with your chosen cinematic vibes
             and individual preferences to choose the tracks. Whether you're a fan of high-octane action
              movies, classic romance films, or eerie horror flicks, your ideal playlist is waiting for
               you here on Groovie. Experience your favorite genres in a whole new light, through the
                power of music.
            </p>
      
            <p className="pb-8">Feel free to reach out to me to get in touch!</p>
            </div>

            <div>
                <Link to='/' className='btn btn-lg btn-outline btn-spotify rounded-full w-about text-xl font-noto-sans'>
                CREATE YOUR GROOVIE PLAYLIST 
                </Link>
            </div>
          </div>
        );
      }
      
  
  export default About;