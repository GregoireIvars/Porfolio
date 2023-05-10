
import './css/App.css';
import Footer from "./component/footer"
import ErrorPage from "./error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './view/home';
import Competence from './view/competence';
import Projet from './view/projet';
import Parcours from './view/parcours';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/competence",
    element: <Competence />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projet",
    element: <Projet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/parcours",
    element: <Parcours />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
    <div>
    <RouterProvider router={router} />
    </div>
    <Footer/>
    </>
  );
}

export default App;
