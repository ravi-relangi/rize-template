import React from 'react';
// import LoginComponent from './Containers/Login/LoginComponent';
// import Sidebar from './Containers/SideBar/Sidebar';

import './App.css';
import CustomLayout from './Containers/CustomLayout/CustomLayout';
function App() {
  return (
    <div className='App'>
      {/* <div className='sideBar'>
        <Sidebar />
      </div>
      <div className='loginComponent'>
        <LoginComponent />
      </div> */}
      <CustomLayout />
    </div>
  );
}

export default App;
