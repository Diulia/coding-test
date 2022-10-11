import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";
import { Footer } from "./components/footer/footer";
export const App = () => {
  
  return (
    <div id="main">
      <Header></Header>
      <Table></Table>
      <Footer></Footer>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
