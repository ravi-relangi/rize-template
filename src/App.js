import React from 'react';
import './App.css';
import LoginComponent from './InputComponents/LoginComponent';

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
