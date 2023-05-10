import React from "react";

interface SelectInputProps {
    name: string,
    value: string,
    options: string[],
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    required?: boolean,
}

const SelectInput: React.FC<SelectInputProps> = props => {
    const {name, value, onChange, required, options} = props

    return <div>
        <label htmlFor={name}>{name}</label>
        <select value={value} name={name} id={name} onChange={onChange} required={required} >
            {options.map((option) => {
                return <option key={option}>{option}</option>
            })}
        </select>
    </div>

}

export default SelectInput