import React from 'react';
import LoginComponent from './Containers/Login/LoginComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='sidebarContent'>
          <h2>Welcome to</h2>
          <label>Rice farms</label>
        </div>
      </div>
      <div className='loginComponent'>
        <LoginComponent />
      </div>
    </div>
  );
}

export default App;
