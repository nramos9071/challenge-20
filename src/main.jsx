import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);