import{createBrowserRouter} from  'react-router-dom';
import  Layout  from '../componets/Layout';
import Home from '../pages/home/Home';



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