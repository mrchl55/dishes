import React from "react";

interface ButtonProps {
    name: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick?: () => {},
    disabled?: boolean,
}

const Button: React.FC<ButtonProps> = props => {
    const {type, onClick, name, disabled} = props
    return <div>
        <button type={type} onClick={onClick} disabled={disabled}>{name}</button>
    </div>
}

export default Button