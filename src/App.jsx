import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { Sidebar } from "./components/Siderbar/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/side" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
