import React from "react";
import Header from "../component/header";
import "../css/home.css";
import HomeAnimation from "../animation/homeAnimation";
function Home() {

  return (
    <>
      <Header />
      <div className="App">
        <HomeAnimation/>
      </div>
    </>
  );
}

export default Home;
