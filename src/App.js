import './App.css';
import ExerciseMain from './pages/ExerciseMain/ExerciseMain';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/ExerciseMain/DetailPage';


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
