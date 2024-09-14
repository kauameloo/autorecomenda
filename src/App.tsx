// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PartnerIncentive from './pages/PartnerIncentive';
import WorkshopList from './pages/WorkshopList';
import GroupMembers from './pages/GroupMembers';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<PartnerIncentive />} />
        <Route path="/workshops" element={<WorkshopList />} />
        <Route path="/group" element={<GroupMembers />} />
      </Routes>
    </Router>
  );
};

export default App;
