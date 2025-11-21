import './App.css'
import Home from './pages/Home'
import MoreInfo from './pages/MoreInfo'
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/moreinfo/:id",
      element: <MoreInfo/>
    },
  ]
);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
