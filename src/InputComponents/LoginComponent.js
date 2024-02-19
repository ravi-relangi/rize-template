import React, { useState } from 'react';
import './style.css';

export default function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateInput = (value) => {
    if (value && value.length > 3) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = (e, type) => {
    const val = e.target.value;
    if (type === 'PASSWORD') {
      setPasswordError('');
      if (val.length <= 3) {
        setPasswordError('Invalid Password');
      }
      setPassword(val);
    } else if (type === 'USERNAME') {
      setUserNameError('');
      if (val.length <= 3) {
        setUserNameError('Invalid Username');
      }
      setUserName(val);
    }
  };

  return (
    <div>
      <div className='loginContainer'>
        <input
          className='input'
          type='text'
          placeholder='Username'
          onChange={(e) => {
            inputHandler(e, 'USERNAME');
          }}
        />
        {userNameError && <div>{userNameError}</div>}

        <input
          className='input'
          type='password'
          placeholder='Password'
          onChange={(e) => {
            inputHandler(e, 'PASSWORD');
          }}
        />
        {passwordError && <div>{passwordError}</div>}
        <button
          disabled={userNameError || passwordError}
          className='submitButton'
          onClick={submitHandler}
        >
          {' '}
          Submit
        </button>
      </div>
    </div>
  );
}
