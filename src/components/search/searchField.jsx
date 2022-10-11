import React from "react";


export const SearchBox = ({onChange}) => {
  const styleInput = {
    position: "relative",
    width: "200px",
    height: "28px",
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    display: "flex",
    margin: "auto",
    marginTop: "18px",
    marginRight: "295px",
    outlineColor: "#A1A3A5",
    outlineStyle: "hidden",
    outlineWidth: "thin",
    backgroundColor: "#2b3135",
    color: "#FFFFFF",
  };

  return (
    <input
    style={styleInput}
    placeholder="Search for title or tournament"
    type="text"
    id="search"
    onChange={onChange}
  ></input>
  )
};
