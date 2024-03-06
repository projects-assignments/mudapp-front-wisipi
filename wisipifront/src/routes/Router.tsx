import{createBrowserRouter} from  'react-router-dom';
import  Layoud  from '../componets/Layout';
import {Home }from '../pages/home/Home';
import Login from '../componets/Forms/Login';
import  Modal_payment  from '../componets/modals/Modal_payment';
import {FacilSeguro} from "../componets/facilseguro/FacilSeguro";
import Modal_verMas from '../componets/modals/Modal_verMas';


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
            },
            {
                path:"/Modal_payment",
                element:<Modal_payment/>
            },
            {
                path:"/Modal_verMas",
                element:<Modal_verMas/>
            }



        ]

    }
])