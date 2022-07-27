import React from 'react';
import './_TowerControlApp.scss';
import { Route, Routes } from 'react-router-dom';
import { BoatPagePage } from '../pages/Boat.page';
import { DashboardPage } from '../pages/Dashboard.page';

export const TowerControlApp = () => {
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="/boat/:boatId" element={<BoatPagePage />} />
    </Routes>
  );
};

export default TowerControlApp;
