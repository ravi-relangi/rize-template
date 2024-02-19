import React from 'react';

export default function Input({ inputFor, type, value, handleChange, error }) {
  return (
    <>
      <input
        className='input'
        type={type}
        value={value}
        placeholder={inputFor}
        onChange={(e) => {
          handleChange(e, inputFor);
        }}
      />
      {error && <span>{error}</span>}
    </>
  );
}
