import React, { useState } from 'react';
import Input from '../../Core/Components/Input/Input';
import Button from '../../Core/Components/Button/Button';
import { disableSubmit, submitHandler, getErrorString } from './helpers';
import './style.css';

export default function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });

  // const disableSubmit = () => {
  //   return errors.userName !== '' || errors.password !== '';
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  // const getErrorString = (inputType, val) => {
  //   return val === ''
  //     ? `${inputType} is required`
  //     : val.length <= 3
  //     ? `${inputType} is invalid`
  //     : '';
  // };

  const inputHandler = (e, type) => {
    const inputValue = e.target.value;
    if (type === 'PASSWORD') {
      setPassword(inputValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: getErrorString('Password', inputValue),
      }));
    } else if (type === 'USERNAME') {
      setUserName(inputValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: getErrorString('Username', inputValue),
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

      <Button
        disabled={disableSubmit(errors)}
        buttonName='Submit'
        onClickHandler={submitHandler}
      />
    </div>
  );
}
