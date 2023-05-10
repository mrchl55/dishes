import React from "react";

interface TextInputProps {
    name: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    autofocus?: boolean,
    required?: boolean,
    placeholder?: string,

}

const TextInput: React.FC<TextInputProps> = props => {
    const {name, value, onChange, autofocus, required, placeholder} = props
    return (<div>
        <label htmlFor={name}>{name}</label>
        <input autoFocus={autofocus} id={name} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}/>
    </div>)
}
export default TextInput;