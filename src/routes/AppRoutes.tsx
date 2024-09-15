import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PartnerIncentive from '../pages/PartnerIncentive';
import WorkshopList from '../pages/WorkshopList';
import GroupMembers from '../pages/GroupMembers';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partner-incentive" element={<PartnerIncentive />} />
      <Route path="/workshop-list" element={<WorkshopList />} />
      <Route path="/group-members" element={<GroupMembers />} />
    </Routes>
  );
};

export default AppRoutes;
