import React, { Component } from 'react';
import List from '../List/List';
import Item from '../Item/Item';

class Inviter extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('container props called from super', this.props);
    }

    render() {
        return (
            <List>
                <Item></Item>
            </List>
        )
    }
}

export default Inviter;