import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';




function App() {
  return (
    <>
    <NavTabs />
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
    </>
  );
}

export default App;