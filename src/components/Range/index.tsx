import React, { useState } from 'react';
import isFunction from 'lodash.isfunction';
import './index.css'
interface InputInterfaceProps {
    label: string,
    max?: number,
    min?: number,
    step?: number
    initialValue?: string
    onChange: (value: string) => void,
}

export function Range({
  label,
  max = 100,
  min = 10,
  step = 1,
  initialValue = '500',
  onChange,
}: InputInterfaceProps): JSX.Element {

    const [value, setValue] = useState<string>(initialValue);
    const handleChange = (event: React.SyntheticEvent) => {

        const target = event.target as HTMLButtonElement;

        setValue(target.value);
        if (isFunction(onChange)) {
            onChange(target.value)
        }
    };

    return (
        <div className="range-block">
            <label className="label" htmlFor="price">{label}</label>
            <input
                id="price"
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}
