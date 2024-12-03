import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./components/Signup"
import { Signin } from "./components/Signin"
import { Dashboard } from "./components/Dashboard"
import { Landing } from "./components/Landing"
import { Header } from "./components/Header"
import { Cart } from "./components/Cart"

function App() {

  return (
  <div className=''>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
