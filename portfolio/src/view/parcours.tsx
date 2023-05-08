import React from 'react';
import Header from "../component/header"
import ParcAnimation from '../animation/parcourAnimation';
function Parcours() {
  return (
    <>
    <Header/>
    <div className="App">
      <ParcAnimation/>
    </div>
    </>
  );
}

export default Parcours;