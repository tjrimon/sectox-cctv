import "./App.css";
import Navbar from "./components/Sections/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Sections/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Sections/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
