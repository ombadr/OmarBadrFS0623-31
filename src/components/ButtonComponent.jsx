import React from 'react';

const ButtonComponent = ({ text }) => {
  return (
    <button style={{ display: 'block', margin: 'auto' }} type='button'>
      {text}
    </button>
  );
};

export default ButtonComponent;
