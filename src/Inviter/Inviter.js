import React, { Component } from 'react';
import List from '../List/List';
import Input from '../Input/Input';

class Inviter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            invitees: [
                {
                    name: 'Eric',
                    email: 'eric_bastarache@hotmail.com'
                }
            ]
        }
    }

    handleChange = (e) => {
        console.log('e', e);
    }

    handleClick = (e) => {
        console.log('submit', e);
    }

    componentDidMount() {
        console.log('container props called from super', this.props);
    }

    render() {
        return (
            <div>
                <List invitees={this.state.invitees.map(invitee => invitee.name)}/>
                <Input 
                    inputType="text"
                    inputName="email-address"
                    inputClass="email-field"
                    inputPlaceholder="Enter email addresses here"
                    inputChange={this.handleChange}
                    />
                <Input
                    inputType="submit"
                    inputName="submit-invites"
                    inputClass="btn-submit"
                    inputValue="Submit"
                    inputSubmit={this.handleClick}
                    />
            </div>
        )
    }
}

export default Inviter;