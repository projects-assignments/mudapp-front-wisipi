import{createBrowserRouter} from  'react-router-dom';
import  Layoud  from '../componets/Layout';
import {Home }from '../pages/home/Home';
import Login from '../componets/Forms/Login';


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
            }

        ]

    }
])