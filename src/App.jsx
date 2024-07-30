import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
      </Routes>
    </>
  );
}
