import React from 'react';
import './index.css';

export default function Button({ onClickHandler, buttonName }) {
  return (
    <>
      <button className='submitButton' onClick={onClickHandler}>
        {buttonName}
      </button>
    </>
  );
}
