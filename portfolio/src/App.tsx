
import './css/App.css';
import Footer from "./component/footer"
import ErrorPage from "./error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './view/home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
