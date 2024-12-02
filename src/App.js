<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExerciseMain from './pentagon/pages/ExerciseMain'; 
import DetailPage from './pentagon/pages/DetailPage'; 
import ExerciseMain from './pages/ExerciseMain';
import DetailPage from './pages/DetailPage';
=======
import './App.css';
import React from 'react';

import BarChart from './pages/ExerciseRecord/BarChart';
import LineChart from './pages/ExerciseRecord/LineChart';
import RadarChart from './pages/ExerciseRecord/RadarChart';
import DoughnutChart from './pages/ExerciseRecord/DoughnutChart';

import ExerciseMain from './pages/ExerciseMain/ExerciseMain';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/ExerciseMain/DetailPage';

>>>>>>> cab6bcd17693e1f2d3c0703027ba2bc3c9a181f4


function App() {
  return (

    <div style={{ width: '600px', margin: '0 auto' }}>

      <h1>차트 모음</h1>
      <BarChart />
      <LineChart/>
      <RadarChart/>
      <DoughnutChart/>
    
    </div>

  );
}

export default App;
