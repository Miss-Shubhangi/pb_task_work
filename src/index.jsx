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
    element:<Home/>
  },
  {
    path : "/planpricing",
    element: <PlanPricing/>
  },
  {
    path:"/form",
    element:<Sakshi/>
  },
  {
    path:"/registration",
    element:<Registration/>
  }
 
])
root.render(
  <RouterProvider router={router}/>
)
