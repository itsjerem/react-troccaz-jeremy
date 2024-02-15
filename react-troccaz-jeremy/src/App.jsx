import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => (
  <div>
    <div>
      <h1>React</h1>
      <a href={`/users`}>Users</a>
      <br />
      <a href={`/posts`}>Posts</a>
      <br />
      <a href={`/context`}>Context</a>
    </div>
    <Outlet />
  </div>
);

export default App;
