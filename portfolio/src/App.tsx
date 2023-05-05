import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from "./component/header"
import Footer from "./component/footer"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);
function App() {
  return (
    <>
    <div className="App">
          <RouterProvider router={router} />
    </div>
    <Footer/>
    </>
  );
}

export default App;
