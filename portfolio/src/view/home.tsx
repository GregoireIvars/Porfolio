import React from "react";
import Header from "../component/header";
import "../css/home.css";
import HomeContent from "../component/homeContent";
function Home() {

  return (
    <>
      <Header />
      <div className="App">
        <HomeContent/>
      </div>
    </>
  );
}

export default Home;
