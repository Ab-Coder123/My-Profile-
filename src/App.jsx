import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Portfolios from './Pages/Portfolios/Portfolios'


function App() {
 // تعريف الرواتر
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/portfolios',
    element:<Portfolios/>,
  }

 
]);

  // استخدام RouterProvider لتوفير الرواتر إلى التطبيق
  return <RouterProvider router={router} />;
}

export default App
