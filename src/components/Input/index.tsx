import React, {useState} from 'react';
import isFunction from 'lodash.isfunction';
import './index.css'

interface InputInterfaceProps {
  value?: string,
  onChange: (value: string) => void,
}

export function Input(props: InputInterfaceProps): JSX.Element {
  const [value, setValue] = useState('');
  
  const handleChange = (event: React.SyntheticEvent) => {
    const { onChange } = props;
    const target = event.target as HTMLButtonElement;

    setValue(target.value);
    if (isFunction(onChange)) {
      onChange(target.value)
    }
  };

  return (
    <input
      value={value}
      className="input"
      onChange={handleChange}
    />
  );
}
