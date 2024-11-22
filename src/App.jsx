import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import './App.css';




function App() {
  return (
    <>
    <NavTabs />
    <div>
      <h1>Nicholas Ramos</h1>
      <Outlet />
    </div>
    </>
  );
}

export default App;