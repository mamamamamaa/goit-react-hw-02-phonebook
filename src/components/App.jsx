import { nanoid } from 'nanoid';

import { Component } from 'react';

import { Form } from './Form/Form';

import { Users } from './Users/Users';

const STORAGE_DATA = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_DATA));
    if (storageData) {
      this.setState({ contacts: storageData });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(STORAGE_DATA, JSON.stringify(contacts));
    }
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
