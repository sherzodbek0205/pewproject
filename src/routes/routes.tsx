import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import { Sound } from 'pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Navigate to="/home" />} />

    <Route path="/sound" element={<Sound />} />
  </Switch>
);

export default Routes;
