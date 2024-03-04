import{createBrowserRouter} from  'react-router-dom';
import {Home }from '../pages/home/Home';
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
                // path:"/Login",
                // element:<Login/>
            }

        ]

    }
])