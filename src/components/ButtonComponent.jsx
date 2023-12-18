import React from 'react';

const ButtonComponent = ({ text }) => {
  return (
    <button
      style={{ display: 'block', margin: 'auto' }}
      type='button'
      onClick={() => alert(`Hai cliccato ${text}`)}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
