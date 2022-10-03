import { nanoid } from 'nanoid';

import { Component } from 'react';

import { Form } from './Form/Form';

import { Users } from './Users/Users';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number }, actions) => {
    const normalizedName = name.toLowerCase();
    if (
      !this.state.contacts.find(
        user => user.name.toLowerCase() === normalizedName
      )
    ) {
      this.setState(prevstate => ({
        contacts: [...prevstate.contacts, { id: nanoid(), name, number }],
      }));
    } else {
      alert(`${name} is already is contacts`);
    }
    actions.resetForm();
  };

  handleDelete = name => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(user => user.name !== name),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Users contacts={contacts} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
