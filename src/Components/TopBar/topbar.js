import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    return (
        <div className="topbar-container">
              <div className="topbar-content">

              <header className="topbar-header-section">
                           
                           {/* <img src={ByteCB} alt="/"/> */}

                       <nav>
                           <ul>
                               <li><Link to="/Login">Login</Link></li>
                           </ul>
                       </nav>
            
                </header>
                  
              </div>
        </div>
    )
}
