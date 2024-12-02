import './App.css';
import React from 'react';
import BarChart from './pages/ExerciseRecord/BarChart';
import LineChart from './pages/ExerciseRecord/LineChart';
import RadarChart from './pages/ExerciseRecord/RadarChart';
import DoughnutChart from './pages/ExerciseRecord/DoughnutChart';


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
