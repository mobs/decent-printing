import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Products, Contact, Services, Offset, Continuous, Digital, Designing } from './components'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter > 
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Offset Printing" element={<Offset />} />
          <Route path="/Continuous Form Printing" element={<Continuous />} />
          <Route path="/Digital Printing" element={<Digital />} />
          <Route path="/Designing Services" element={<Designing />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
