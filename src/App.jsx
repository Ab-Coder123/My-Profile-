import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Portfolios from './Pages/Portfolios/Portfolios'
import Contact from './Pages/Contact/Contact';


function App() {
  // تعريف الرواتر
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/portfolios',
      element: <Portfolios />,
    },

    {
      path: '/Contact',
      element: <Contact />
    }


  ]);

  // استخدام RouterProvider لتوفير الرواتر إلى التطبيق
  return <RouterProvider router={router} />;
}

export default App
