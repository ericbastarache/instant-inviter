import React from 'react';

const input = (props) => {
    return (
        <input
            className={props.class}
            type={props.inputType}
            name={props.inputName}
            placeholder={props.placeholder || ''}
            />
    )
}

export default input;