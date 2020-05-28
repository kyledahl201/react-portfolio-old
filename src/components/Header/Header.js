import React from "react";
const Header = (props) => (
    <header className="top">
        <h1>Kyle
           <span className="ofThe">
               <span className="of">Austin</span>
               <span className="the"></span>
               </span>  
              Dahl</h1>
        <h3 className="tagline">
        <span>{props.tagline}</span>
    </h3>
    </header>
);



export default Header;