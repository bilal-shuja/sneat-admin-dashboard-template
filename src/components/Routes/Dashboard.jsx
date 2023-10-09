import React, { useState } from "react";
import Forms from "../Forms/Forms";
import Sheets from "../Sheets/Sheets";
import Navbar from "../Layout/Navbar";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";
import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
    <Router>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
          <div className="layout-page">
            <Navbar toggleSidebar={toggleSidebar} />
            <Routes>
            <Route path="/" element={<Content />}/>   
            <Route path="/Forms" element={<Forms />}/>   
            <Route path="/Sheets" element={<Sheets />}/>      
            </Routes>  
          </div>
        </div>
      </div>
      </Router>
    </>
  );
};

export default Dashboard;
