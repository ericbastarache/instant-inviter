import React from 'react';
import './Item.css';

const item = (props) => {
    console.log('item props', props);
    return (
        <li className="list-item">{props.children}</li>
    )
}

export default item;