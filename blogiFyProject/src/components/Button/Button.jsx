import React from "react";

function Button({
    children, // basically the text of button
    // default values unless mentioned
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
    // props used for the rest of the attributes user has added
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}{...props}>
            {children}
        </button>
    );
}

export default Button;

// generalized button component