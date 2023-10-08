
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Courses from '../Pages/Events/Events';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import Error from '../Error/Error';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import EvenetDetails from '../Components/EvenetDetails/EvenetDetails';
import Benifits from '../Components/Benifits/Benifits';
import TeamMember from '../Components/TeamMember/TeamMember';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/benifits',
                element: <Benifits></Benifits>
            },
            {
                path: '/team',
                element: <TeamMember></TeamMember>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <EvenetDetails></EvenetDetails>
                </PrivateRoute>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default Router;