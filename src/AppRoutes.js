import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function AppRoutes({ dogs }) {
  return (
    <Routes>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <DogDetails dogs={dogs} />
      </Route>
      <Navigate to="/dogs" />
    </Routes>
  );
}

export default AppRoutes;
