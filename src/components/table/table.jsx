import React, { useEffect, useState } from "react";
import { getMatches } from "../../clients/gameMatchHttpClient";
import { webSocketClient } from "../../clients/gameMatchWSClient";
import { SearchBox } from "../search/searchField";
import "@fontsource/montserrat";

export const Table = () => {
  const styleMain = {
    margin: "auto",
    marginTop: "20px",
    marginBottom: "120px",
    boxSizing: "border-box",
    width: "763px",
    height: "auto",
    borderRadius: "5px 5px 5px 5px",
    border: "1 px solid #4E5356",
    backgroundColor: "#2b3135",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "0px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500px",
    fontSize: "14px",
    lineHeight: "2Opx",
  };
  const styleTr = {
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
    height: "50px",
    borderBottom: "0.8px solid #4E5356",
    color: "#FFFFFF",
  };
  const styleTh = {
    boxSizing: "border-box",
    width: "763px",
    height: "32px",
    borderRadius: "5px 5px 5px 5px",
    backgroundColor: "#363B3F",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px",
    color: "#A1A3A5",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600px",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
  };
  const styleDiv = {
    display: "flex",
    alignItems: "baseline",
    padding: "5px",
    margin: "5px",
  };
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
  const [seriesData, setSeriesData] = useState([]);
  const [scoresData, setScoresData] = useState([]);
  const [responseAll, setResponseAll] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

  const testeResponse = seriesData.map((x, i) => {
    return {
      id: x.id,
      title: x.title,
      startTime: x.startTime,
      tournament: x.tournament.shortName,
      match: x.teams.map((el, idx) => {
        return {
          teamName: el.name,
          teamLogo: el.logoUrl,
          currentGame: scoresData[i]?.games[idx]?.teams[idx]?.score || 0,
          winSeries: scoresData[i].series.teams[idx].score || 0,
        };
      }),
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMatches();
      setSeriesData(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilterData(testeResponse);
  }, [seriesData, scoresData]); //Tem que ouvir APENAS estados!!!!!

  const ws = webSocketClient;
  ws.onmessage = (event) => {
    setScoresData(JSON.parse(event.data));
  };

  useEffect(() => {
    const aFilt = filterData.filter((e) => {
      return (
        e.title.toUpperCase().includes(search.toUpperCase()) ||
        e.tournament.toUpperCase().includes(search.toUpperCase())
      );
    });

    if (search === "") {
      setResponseAll(filterData);
    } else {
      setResponseAll(aFilt);
    }
  }, [search, seriesData, scoresData]);
  return (
    <div>
      <label>
        {/* <input
          style={styleInput}
          placeholder="Search for title or tournament"
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input> */}
        <SearchBox onChange={(e) => setSearch(e.target.value)}></SearchBox>
      </label>

      <table style={styleMain} id="table">
        <th style={styleTh}>
          <td style={{ width: 70 }}>TITLE</td>
          <td style={{ width: 80}}>TIME</td>
          <td style={{ width: 250 }}>TEAM 1</td>
          <td style={{ width: 158 }}>TEAM 2</td>
          <td style={{ width: 240 }}>TOURNAMENT</td>
        </th>

        {responseAll.map((e) => (
          <tr style={styleTr}>
            <td style={{ color: "#A1A3A5", width: 38}}>
              {e.title}
            </td>
            <td style={{ width: 68}}>{e.startTime}</td>
            {/* {e.match.map((element) => (
              <td style={{ width: 88 }}>
                <div style={styleDiv}>
                  <span>{element.teamName}</span>
                  <img
                    src={element.teamLogo}
                    style={{ width: 20, height: 13, padding: 5 }}
                    alt="logoUrl"
                  ></img>
                  <span>({element.currentGame})</span>
                  <span>{element.winSeries}</span>
                </div>
              </td>
            ))} */}

            <td style={{width: 100}}>
              <div style={styleDiv}>
                <span style={{padding: 5}}>{e.match[0].teamName}</span>
                <img
                  src={e.match[0].teamLogo}
                  style={{ width: 20, height: 13}}
                  alt="logo"
                />
                <span style={{ padding: 2,lineHeight: 16, fontWeight: 600, fontSize: 12, color: "#A1A3A5"}}>({e.match[0].currentGame}) </span>
                <span style={{lineHeight: 16, fontWeight: 600, fontSize: 12}}>{e.match[0].winSeries}</span>
              </div>
            </td>

            <td style={{color: "#717578", margin: 5, width: 8, textAlign: "center"}}>
              <div style={styleDiv}>
                <span>x</span>
              </div>
              
            </td>

            <td style={{ width: 190}}>
              <div style={styleDiv}>
                <span style={{lineHeight: 16, fontWeight: 600, fontSize: 12}}>{e.match[1].winSeries}</span>
                <span style={{padding: 2,lineHeight: 16, fontWeight: 600, fontSize: 12, color: "#A1A3A5"}}>({e.match[1].currentGame})</span>
                <img
                  src={e.match[1].teamLogo}
                  style={{ width: 20, height: 13,}}
                  alt=""
                />
                <span style={{padding: 5}}>{e.match[1].teamName}</span>
              </div>
            </td>

            <td style={{ width: 140, textAlign: "left"}}>{e.tournament}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
