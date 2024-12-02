import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExerciseMain from './pentagon/pages/ExerciseMain'; 
import DetailPage from './pentagon/pages/DetailPage'; 
import ExerciseMain from './pages/ExerciseMain';
import DetailPage from './pages/DetailPage';


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
