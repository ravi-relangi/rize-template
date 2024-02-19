import React from 'react';
import './index.css';

export default function Button({ onClickHandler, buttonName, disabled }) {
  return (
    <>
      <button
        disabled={disabled}
        className='submitButton'
        onClick={onClickHandler}
      >
        {buttonName}
      </button>
    </>
  );
}
