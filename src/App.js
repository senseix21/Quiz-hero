// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import About from './Components/About/About';
import FourOFour from './Components/FourOFour/FourOFour';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:
        [
          {
            path: '/',
            element: <Home></Home>,
            loader: async () => {
              return fetch(`https://openapi.programming-hero.com/api/quiz`)
            }
          },
          {
            path: '/quiz/:id', element: <Quiz></Quiz>,
            loader: async ({ params }) => {
              // console.log(params);
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
          },
          { path: '/about', element: <About></About> },
          { path: '*', element: <FourOFour></FourOFour> }
        ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
