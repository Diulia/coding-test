import React from "react";
import "@fontsource/montserrat";

export const Footer = () => {
  const styleF = {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    paddingTop: "20px",
    backgroundColor: "#1d2327",
    alignItems: "center",
    justifyContent: "center",
    color:"#eff4f7",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600px",
    fontSize: "16px",
    lineHeight: "1.7px",
    letterSpacing: "1px",
  };

  const style = {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "row",
    paddingBottom: "15px",
    backgroundColor: "#1d2327",
    alignItems: "center",
    justifyContent: "center",
    color:"#eff4f7",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: "10px",
    lineHeight: "1.7px",
    letterSpacing: "1px",
  };

  return (
      <footer style={{height: 60, position: "fixed", bottom: 20, left: 0, right: 0}}>
        <div style={styleF}>
        <p style={{fontWeight: "bold"}}>GRID FRONT-END CODING TEST</p>
        <p style={style}>&copy;|Some Rights Reserved</p>
        </div>
      </footer>
  );
};
