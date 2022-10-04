import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from './redux/rockets/rocketReducer';
import { getMissions } from './redux/Missions/missionsReducer';
import Rockets from './components/rockets/Rockets';
import Navbar from './components/navbar/Navbar';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/missions" exact element={<Missions />} />
        <Route path="/" exact element={<Rockets />} />
      </Routes>
    </>

  );
}

export default App;
