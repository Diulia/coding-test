import * as React from "react";
import "@fontsource/montserrat";

// const columns = [
//   { field: "Title", headerName: "title", width: 70 },
//   { field: "time", headerName: "time", width: 130 },
//   { field: "teamOne", headerName: "teamOne", width: 130 },
//   { field: "teamTwo", headerName: "teamTwo", width: 90 },
//   { field: "tournament", headerName: "tournament", width: 160 },
// ];

export const ItemHeader = () => {
  const style = {
    position: "absolute",
    width: "757px",
    height:"16px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "8px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600px",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#A1A3A5",
  };

  return (
    <div>
      <table style={{padding: 0,display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'absolute', weight: 715, height: 20 }}>
        <tr style={style}>
          <td style={{width: 70}}>Title</td>
          <td style={{width: 130}}>Time</td>
          <td style={{width: 130}}>Team 1</td>
          <td style={{width: 90}}>Team 2</td>
          <td style={{width: 160}}>Tournament</td>
        </tr>
      
      </table>
    </div>
  );
};
