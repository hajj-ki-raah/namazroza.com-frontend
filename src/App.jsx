import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Footer from "./components/Footer";

import "./stylesheets/app.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />

        <Route
          path="*"
          element={
            <div className="page-not-found">
              404 <br />
              Page Not Found
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
