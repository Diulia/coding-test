import React from "react";
import "@fontsource/montserrat";

export const Header = () => {
    const style = {
        width: "auto", 
        display: "flex", 
        flexDirection: "row",
        backgroundColor: "#1d2327", 
        paddingRight: 32, 
        paddingLeft: 32, 
        justifyContent: "space-between"
    }

    const styleH = {
        fontFamily: "Montserrat", 
        fontWeight: 900, 
        fontSize: 32, 
        color: "#FFFFFF"
    }
  return (
     <header style={style}>
            <h1 style={styleH}>On Going Games</h1>
     </header>
  );
};


  