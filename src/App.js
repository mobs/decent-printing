import { BrowserRouter, Routes, Route } from "react-router-dom";

import Icon from "./components/Icon";
import {
  Home,
  About,
  Products,
  Contact,
  Services,
  Offset,
  Continuous,
  Digital,
  Designing,
  ProductDetails,
  Checkout,
  CEO,
  Introduction,
  Vision,
  Quality,
  Environmental,
  Success,
  Gallery,
  Images,
  Videos
} from "./components";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
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
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:productTitle" element={<ProductDetails />} />
        <Route path="/Checkout/:productTitle" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Offset Printing" element={<Offset />} />
        <Route path="/Continuous Form Printing" element={<Continuous />} />
        <Route path="/Digital Printing" element={<Digital />} />
        <Route path="/Designing Services" element={<Designing />} />

        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
      <Icon />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
