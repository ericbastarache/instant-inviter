import React from 'react';

const header = (props) => {
    return (
        <div>
            <h1>{props.headerText}</h1>
            <h3>{props.children}</h3>
        </div>
    )
}

export default header;