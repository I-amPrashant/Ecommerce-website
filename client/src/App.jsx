import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
        <Footer/>
        <ScrollTop/>
      </Router>
    </>
  );
}
