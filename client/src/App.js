import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Icon from "./components/Icon";
import {
  Navbar,
  Footer,
  Home,
  About,
  Products,
  Contact,
  Services,
  Offset,
  Continuous,
  Digital,
  Designing,
  Checkout,
  CEO,
  Introduction,
  Vision,
  Quality,
  Environmental,
  Success,
  Gallery,
  SignIn,
  AddProduct,
  Dashboard,
  AddGalleryData
} from "./components";
import "./App.css";

import { getProducts } from "./actions/products";
import { getData } from "./actions/gallery";
import { getBanner } from "./actions/banner";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getData());
    dispatch(getBanner());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/From CEO's Desk" element={<CEO />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="Vision, Mission and Values" element={<Vision />} />
        <Route path="/Quality Policy" element={<Quality />}  />
        <Route path="/Environmental Policy" element={<Environmental />} />
        <Route path="/SUCESS FACTORS" element={<Success />} />

        {/* <Route path="/Products" element={<Products />} /> */}
        <Route path="/Products/:category?" element={<Products />} />
        {/* <Route path="/Products/:productTitle" element={<ProductDetails />} /> */}
        <Route path="/Checkout/:id" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Offset Printing" element={<Offset />} />
        <Route path="/Continuous Form Printing" element={<Continuous />} />
        <Route path="/Digital Printing" element={<Digital />} />
        <Route path="/Designing Services" element={<Designing />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/AddGalleryData" element={<AddGalleryData />} />

        <Route path='/Gallery' element={<Gallery />} />
        <Route path="/SignIn"  element={<SignIn />} />
      </Routes>
      <Icon />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
