import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home";
import ProductDetails from "../productDetails";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetails />} />
    </Routes>
  );
};

export default Navigation;
