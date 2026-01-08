import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./organism/HomePage";
import Navbar from "./molecules/Navbar";
import Footer from "./molecules/Footer";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
