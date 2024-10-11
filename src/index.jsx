import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
//import Sakshi from './views/sakshi';
import PlanPricing from './Views/PlanPricing/PlanPricing.jsx';
import Home from './Views/Home/Home.jsx';
import Services from './Views/Services/Services.jsx';
import About from './Views/About/About.jsx';
import Contact from './Views/Contact/Contact.jsx';
//import Registration from './views/Registration/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<PlanPricing/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path : "/planpricing",
    element: <PlanPricing/>
  },
  {
    path:"/form",
    element:<PlanPricing/>
  },
  {
    path:"/services",
    element:<Services/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }

 
])
root.render(
  <RouterProvider router={router}/>
)
