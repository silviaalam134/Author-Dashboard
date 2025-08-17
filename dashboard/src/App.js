import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import MyArticles from "./pages/MyArticles";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/articles" element={<MyArticles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
