import React, {useId} from "react";

const Input = React.forwardRef( function Input({
    label,
    type = 'text', // basically taken default as text if not mentioned
    className = '',
    ...props
}, ref) {
    const id = useId(); // generate new id
    return (
        <div className="w-full">
            {label && <label
                className="inline-block mb-1 pl-1" 
                htmlFor={id}> {/* htmlFor attribute in HTML is used to associate a <label> element with a form control (like an <input>, <textarea>, or <select> element) */}
                    {label}
                </label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref} 
            {...props} 
            id={id}
            />
            {/* ref used to refer parent here */}
            {/* The {...props} syntax in React is known as the "spread attributes" or "spread operator," which is used to pass all of the properties of an object to a component or DOM element in one line*/}
            {/* like we said, htmlFor is to associate with someone with id */}
        </div>
    );
});

export default Input;