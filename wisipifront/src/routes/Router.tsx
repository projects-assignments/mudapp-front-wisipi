import{createBrowserRouter} from  'react-router-dom';
import {Home }from '../pages/home/Home';

import  Modal_payment  from '../componets/modals/Modal_payment';
import {FacilSeguro} from "../componets/facilseguro/FacilSeguro";
import Layout from '../componets/Layout';


export const Router = createBrowserRouter([
    // Página Principal
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home />
            },
            
           {
                path:"/FacilSeguro",
                element:<FacilSeguro/>
            },
            {
                path:"/Modal_payment",
                element:<Modal_payment/>
            }


        ]

    }
])