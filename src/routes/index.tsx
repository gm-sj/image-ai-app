// src/routes/index.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../container/Main/index'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default AppRoutes;