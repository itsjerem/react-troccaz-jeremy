import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import UsersScreen from './screens/UsersScreen'
import PostsScreen from './screens/PostsScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/users", element: <UsersScreen /> },
      { path: "/posts", element: <PostsScreen /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
