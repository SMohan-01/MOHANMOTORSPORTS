import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Helmet from "./pages/Helmet";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import YourOrders from "./pages/YourOrders";
import Details from "./pages/Details";
import SellBike from "./pages/SellBike";
import ServicesAndModifications from "./pages/ServicesAndModifications";
import Profile from "./pages/Profile";
import RequireAuth from "./services/RequireAuth";

function App() {
  const [orders, setOrders] = useState(null);
  return (
    <div className="App">
      <ToastContainer />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route element={<RequireAuth />}>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/sellbike" element={<SellBike />}></Route>
          <Route
            path="/services-modifications"
            element={<ServicesAndModifications />}
          ></Route>
          <Route path="/helmets" element={<Helmet />}></Route>
          <Route path="/mycart" element={<Cart />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/checkout"
            element={<Checkout setOrders={setOrders} />}
          ></Route>
          <Route
            path="/your-order"
            element={<YourOrders orders={orders} />}
          ></Route>
          <Route path="/inventory/:id" element={<Details />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
