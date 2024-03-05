import{createBrowserRouter} from  'react-router-dom';
import  Layoud  from '../componets/Layout';
import {Home }from '../pages/home/Home';
import Login from '../componets/Forms/Login';
import {Payment} from '../pages/payment/Payment';
import {FacilSeguro} from "../componets/facilseguro/FacilSeguro"


export const Router = createBrowserRouter([
    // Página Principal
    {
        path: "/",
        element:<Layoud/>,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/Login",
                element:<Login/>
            },
           
            {
                path:"/FacilSeguro",
                element:<FacilSeguro/>
            }


        ]

    }
])