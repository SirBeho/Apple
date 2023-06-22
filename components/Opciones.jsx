
import React, { useState,useEffect } from "react";

export default function opciones({activeDiv}) {

    const [mostrarImagen, setMostrarImagen] = useState(false);
   
   
  return (
    <div className=' '>
          
            <div   className={`imagen-light w-100 z-1 ${activeDiv ? 'show' : ''}`}>
                
                 <div className={activeDiv !== "Home" ? "d-none" : "bg-pimary w-100"} id="home">
                    <div className='bg-info'>
                       <ul>
                        <li>
                            menu 1
                        </li>
                        <li>
                            hmenu1
                        </li>
                       </ul>
                    </div>
                </div>
                <div className={activeDiv !== "Link" ? "d-none" : " bg-pimary w-100"} id="link">
                <div className='bg-info'>
                       <ul>
                        <li>
                            hola menu 1
                        </li>
                        <li>
                            hola2 menu 1
                        </li>
                       </ul>
                    </div>
                 </div> 
                     </div>

    </div>
  )
}
