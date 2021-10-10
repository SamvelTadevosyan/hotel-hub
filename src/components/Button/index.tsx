import React from 'react';
import isFunction from 'lodash.isfunction';
import './index.css'

interface InputInterfaceProps {
  data?: any,
  label?: string,
  customClassName?: string,
  onClick: (data: any, event: React.SyntheticEvent) => void,
}

export function Button({
  data = {}, onClick, label = 'Button', customClassName = ''
}: InputInterfaceProps): JSX.Element {

  const handleChange = (event: React.SyntheticEvent) => {
    if (isFunction(onClick)) {
      onClick(data, event)
    }
  };

  return (
    <button
      className={`button ${customClassName}`}
      onClick={handleChange}
    >
      <span>{label}</span>
    </button>
  );
}
