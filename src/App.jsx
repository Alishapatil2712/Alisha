import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AdmissionPage from './pages/AdmissionPage';
import CoursesPage from './pages/CoursesPage';
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"

// Header
import Header from './components/Header/Header';
//Footer
import Footer from './components/Footer/Footer';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Alisha Ravindra Patil"
          studentPhotoUrl="\Images\IMG-20240204-WA0009.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Header/>
      
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ChatbotComponent/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;