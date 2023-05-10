import React from "react";

interface NumberInputProps {
    name: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    autofocus?: boolean,
    required?: boolean,
    placeholder?: string,
    min?: number,
    max?: number,
    step?: number,

}

const NumberInput: React.FC<NumberInputProps> = props => {
    const {name, value, onChange, autofocus, required, placeholder, min, max, step} = props
    return (<div>
        <label htmlFor={name}>{name}</label>
        <input autoFocus={autofocus} step={step} min={min} max={max} id={name} name={name} value={value} onChange={onChange} required={required} type="number" placeholder={placeholder}/>
    </div>)
}
export default NumberInput;