import styled from '@emotion/styled'
import { Outlet } from "react-router-dom"
import './App.css'


const App = () => (
  <div>
    <div>
      <h1>React</h1>
      <a href={`/users`}>Users</a>
      <a href={`/posts`}>Postss</a>
    </div>
    <Outlet />
  </div>
)


export default App