import React from 'react';
import Wordle from './components/wordle';
import { Routes, Route } from 'react-router-dom';
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Wordle />}>
        </Route>
             </Routes>
  );
}

export default App;
