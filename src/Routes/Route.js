import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";


const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',element: <Main></Main>,
            children: [
                {
                    path: '/',element: <Home></Home>,
                    loader: () => fetch('http://localhost:5000/home')

                },
                {
                    path: '/blog',element: <Blog></Blog>
                },
                {
                    path: '/services',element: <Services></Services>
                },
                {
                    path: '/services/:id',element: <ServiceDetails />,
                    loader: ({ params }) => {
                        return fetch(`http://localhost:5000/services/${params.id}`)
                    }
                },
                {
                    path: '/login',element: <Login />
                },
                {
                    path: '/register',element: <Register></Register>
                },
                {
                    path: '/add-service',element:
                        <PrivateRoute>
                            <AddServices />
                        </PrivateRoute>
                },
                {
                    path: '/reviews',element: <Reviews></Reviews>
                },
                {
                    path: '*',element: <NotFound />
                },
                // {
                //     path: '/reviews/:id',
                //     loader: ({ params }) => {
                //         return fetch(`http://localhost:5000/review/${params.id}`)
                //     },
                //     element: <UpdateReview />
                // },
            ]
        },
    ])
    return (
        router
    );
};

export default Route;