import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
//import Sakshi from './views/sakshi';
import PlanPricing from './Views/PlanPricing/PlanPricing.jsx';
//import Registration from './views/Registration/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<PlanPricing/>
  },
  {
    path:"/home",
    element:<PlanPricing/>
  },
  {
    path : "/planpricing",
    element: <PlanPricing/>
  },
  {
    path:"/form",
    element:<PlanPricing/>
  }
 
])
root.render(
  <RouterProvider router={router}/>
)
