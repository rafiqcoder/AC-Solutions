import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Services from "../Pages/Services/Services";


const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',element: <Main></Main>,
            children: [
                {
                    path: '/',element: <Home></Home>
                },
                {
                    path: '/blog',element: <Blog></Blog>
                },
                {
                    path: '/services',element: <Services></Services>
                },
                {
                    path: '/login',element: <Login />
                },
                {
                    path: '/register',element: <Register></Register>
                },
                {
                    path: '/add-service',element: <AddServices />
                },
                {
                    path: '/reviews',element: <Reviews></Reviews>
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