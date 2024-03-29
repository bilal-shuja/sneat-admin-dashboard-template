import React, { useState } from "react";
import Forms from "../Forms/Forms";
import Sheets from "../Sheets/Sheets";
import Navbar from "../Layout/Navbar";
import Content from "../Layout/Content";
import Sidebar from "../Layout/Sidebar";

import SearchSection from "../SearchOpenAi/SearchSection";
import SearchedSection from '../SearchOpenAIResponse/SearchedSection';
import GenerateImageArtSection from "../GenerateImageArt/GenerateImageArtSection";
import GenerateImageArtToolSection from "../GenerateImageArt/GenerateImageArtToolSection";

import AIAdvisorSection from "../AIAdvisorSection/AIAdvisorSection";
import AIChatSection from "../AIChatSection/AIChatSection";
import AISnapShotSection from "../AISnapShotSection/AISnapShotSection";

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
            <Route path="/" element={<SearchSection />}/>  

            <Route path="/OpenAIGUI" element={<SearchedSection />}/>  

            

            <Route path="/GenerateImageArt" element={<GenerateImageArtSection />}/>

            <Route path="/GenerateImageArtTool" element={<GenerateImageArtToolSection />}/>   

            <Route path="/AIAdvisorSection" element={<AIAdvisorSection />}/>

            <Route path="/AIChatSection" element={<AIChatSection />}/>   

            <Route path="/AISnapShotSection" element={<AISnapShotSection />}/>   


            
            

            

            
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
