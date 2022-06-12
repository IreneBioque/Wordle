import React from 'react';
import Wordle from './components/wordle';
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css"

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Wordle />}>
        </Route>
             </Routes>
  );
}

export default App;
