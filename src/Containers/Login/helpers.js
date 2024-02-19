export const disableSubmit = (errors) => {
  return errors.userName !== '' || errors.password !== '';
};

export const submitHandler = (e) => {
  e.preventDefault();
};

export const getErrorString = (inputType, val) => {
  return val === ''
    ? `${inputType} is required`
    : val.length <= 3
    ? `${inputType} is invalid`
    : '';
};