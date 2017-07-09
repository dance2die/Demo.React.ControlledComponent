import React from 'react';

// https://stackoverflow.com/a/35967996/4035
export default class ContactEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: props.contact
        };
    }

    handleChangeFor = (propertyName) => (event) => {
        const {contact} = this.state;
        const newContact = {
            ...contact,
            [propertyName]: event.target.value
        };
        this.setState({contact: newContact}, () =>{
            console.log(this.state.contact);
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChangeFor('firstName')} value={this.state.contact.firstName}/>
                <input type="text" onChange={this.handleChangeFor('lastName')} value={this.state.contact.lastName}/>
                <input type="text" onChange={this.handleChangeFor('phone')} value={this.state.contact.phone}/>
            </div>
        );
    }
}