import { Outlet } from "react-router-dom"
import NavBar from "./shared/NavBar"


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  )
}

export default App
