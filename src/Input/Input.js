import React from 'react';
import './Input.css';

const input = (props) => {
    console.log('input props', props);
    return (
        <input
            className={props.inputClass}
            type={props.inputType}
            name={props.inputName}
            placeholder={props.inputPlaceholder || ''}
            onChange={props.inputChange}
            onClick={props.inputSubmit}
            value={props.inputValue}
            />
    )
}

export default input;