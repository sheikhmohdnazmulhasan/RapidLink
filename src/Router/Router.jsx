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

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/register', element: <Register /> },
            { path: '/team', element: <Team /> },
            { path: '/about', element: <About /> },
            { path: '/features', element: <Feature /> },
            { path: '/lobby', element: <Lobby /> }

        ]
    }
])

export default Router;