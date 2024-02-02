import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/home/Home';
import Contact from '../pages/Root/Contact';
import Register from '../pages/Root/Register';
import Error from '../pages/Root/Error';
import Team from '../pages/Root/Team';
import About from '../pages/Root/About';
import Feature from '../pages/Root/Feature';
import Lobby from '../pages/screens/Lobby';
import Room from '../pages/screens/Room';
import Login from '../pages/Root/Login';
import Pricing from '../pages/Root/Pricing';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },

            // User Route
            { path: '/pricing', element: <Pricing /> },

            { path: '/team', element: <Team /> },
            { path: '/about', element: <About /> },
            { path: '/features', element: <Feature /> },
            { path: '/lobby', element: <Lobby /> },
            { path: '/room/:roomId', element: <Room /> }

        ]
    }
])

export default Router;