import React from 'react';
import Header from "../component/header"
import "../css/home.css"
function home() {
  return (
    <>
      <Header />
      <div className="App">
        <section className='infoUser' >
          <div>
              <p>Block 1 </p>
          </div>
          <div>
            <p>Block 2 </p>
          </div>
              </section>
              <section className='other data'>
          <div>
            <p>Block 3 </p>
          </div>
          <div>
            <p>Block 4 </p>
          </div>
          </section>

    


      </div>
    </>
  );
}

export default home;
