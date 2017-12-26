import React from 'react';
import './List.css';
import Item from '../Item/Item';

const list = (props) => {
    console.log('list props', props);
    return (
        <div>
            <ul className="list">
                {props.invitees.map((name, idx) => {return <Item key={idx}>{name}</Item>})}
            </ul>
        </div>
    )
}

export default list;