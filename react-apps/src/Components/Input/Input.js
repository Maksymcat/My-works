import React from 'react';

const Input = ({value, onChange}) => {
    return (
        <>
        <input className="w-100 h-250" type="text"
        value={value    }
        onChange={onChange}
        />
        </>
    )
}
export default Input;