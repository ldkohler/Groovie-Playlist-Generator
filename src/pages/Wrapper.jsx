import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


function Wrapper() {
    
    
    return (
        
      <div >
        <Navbar />
        <main >
          <Outlet />
        </main>
      </div>
    );
  }
  
  export default Wrapper;