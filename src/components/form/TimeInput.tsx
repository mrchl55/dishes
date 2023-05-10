import React from "react";

interface TimeInputProps {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    autofocus?: boolean,
    required?: boolean,
    placeholder?: string,
}

const TimeInput: React.FC<TimeInputProps> = props => {
    const {name, value, onChange, autofocus, required, placeholder} = props
    return <div>
        <label htmlFor={name}>{name}</label>
        <input id={name} name={name} value={value} autoFocus={autofocus} onChange={onChange} type={'time'} required={required} placeholder={placeholder}
                step={1}></input>
    </div>
}

export default TimeInput