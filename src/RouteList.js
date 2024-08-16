import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({ dogs }) {
  return (
    <Routes>
      {/* Route to display all dogs */}
      <Route path="/dogs" element={<DogList dogs={dogs} />} />

      {/* Route to display details for a specific dog */}
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />

      {/* Redirect to /dogs if no specific route is matched */}
      <Route path="/" element={<Navigate to="/dogs" />} />

      
    </Routes>
  );
}

export default RouteList;
