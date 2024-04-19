/* eslint-disable react/prop-types */
import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <>
            <input
            type={type}
            className={`py-2 pl-2 border-black border ${className}`}
            ref={ref}
            placeholder={label}
            {...props}
            id={id}
            />
        </>
    )
})

export default Input