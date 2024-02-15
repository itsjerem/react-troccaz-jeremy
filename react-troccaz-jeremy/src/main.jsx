import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import UsersScreen from "./screens/UsersScreen";
import PostsScreen from "./screens/PostsScreen";
import ContextScreen from "./screens/ContextScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/context", element: <ContextScreen /> },
      { path: "/posts", element: <PostsScreen /> },
      { path: "/users", element: <UsersScreen /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
