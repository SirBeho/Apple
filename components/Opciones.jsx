
import React, { useState,useEffect } from "react";

export default function opciones({activeDiv,setActiveDiv}) {

     
   
  return (
            <div className={`imagen-light w-100 z-1 d-flex flex-column text-light ${activeDiv ? 'show' : ''}`}>
                <div className={activeDiv !== "Watch" ? "d-none" : "z-2 w-100 bg-dark "} id="home">
                    
                       <ul >
                        <li>
                            menu 1
                        </li>
                        <li>
                            hmenu1
                        </li>
                       </ul>
                    </div>
                
                <div className={activeDiv !== "Link" ? "d-none" : "z-2  w-100 bg-dark"} id="link">
                
                       <ul>
                        <li>
                            hola menu 1
                        </li>
                        <li>
                            hola2 menu 1
                        </li>
                       </ul>
                    </div>
                
                <div className="bg-transparent w-100 h-100" onMouseEnter={() => setActiveDiv(false)}  >
                           
                </div>
             </div>

    
  )
}
