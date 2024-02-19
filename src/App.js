import React from 'react';
import LoginComponent from './Containers/Login/LoginComponent';
import './App.css';
import Sidebar from './Containers/SideBar/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <Sidebar />
      </div>
      <div className='loginComponent'>
        <LoginComponent />
      </div>
    </div>
  );
}

export default App;
