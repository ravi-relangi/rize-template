import React, { useState } from 'react';
import Input from '../../Core/Components/Input/Input';
import Button from '../../Core/Components/Button/Button';
import './style.css';

export default function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });

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
      setPassword(val);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: val.length <= 3 ? 'Invalid Password' : '',
      }));
    } else if (type === 'USERNAME') {
      setUserName(val);
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: val.length <= 3 ? 'Invalid Username' : '',
      }));
    }
  };

  return (
    <div className='loginContainer'>
      <Input
        inputFor='USERNAME'
        type='text'
        value={userName}
        handleChange={inputHandler}
        error={errors?.userName}
      />
      <Input
        inputFor='PASSWORD'
        type='password'
        value={password}
        handleChange={inputHandler}
        error={errors?.password}
      />

      <Button buttonName='Submit' onClickHandler={submitHandler} />
    </div>
  );
}
