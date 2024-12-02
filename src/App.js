import './App.css';
import ExerciseMain from './pentagon/ExerciseMain';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pentagon/DetailPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExerciseMain />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="*" element={<div>경로 오류</div>} />
      </Routes>
    </Router>
  );


}

export default App;
