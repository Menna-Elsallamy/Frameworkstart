import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Portofolio from "./Components/Portofolio/Portofolio";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import { NavLink } from "react-router-dom";
const routers = createBrowserRouter([
  { path: '', element: <Layout/>,
children:[
  {index:true,element:<Home/>},
  {path:'/about',element:<About/>},
  {path:'/portofolio',element:<Portofolio/>},
  {path:'/parent',element:<Contact/>},
  {path:'*',element:<NotFound/>}
]
}
]);

const App = () => {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
