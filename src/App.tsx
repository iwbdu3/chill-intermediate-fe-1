import './App.css'
import { Outlet } from "react-router";
import Navbar from "./ui/container/Navbar";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
