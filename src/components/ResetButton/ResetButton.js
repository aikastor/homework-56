import React from 'react';

const ResetButton = (props) => {
  return (
    <button className='ResetButton'
            onClick={props.onClick}>
      Reset
    </button>
  );
};

export default ResetButton;