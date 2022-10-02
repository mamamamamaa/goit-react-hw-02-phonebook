import { Component } from 'react';
import { Label } from 'components/Form/Form.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';

export class Users extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, handleDelete } = this.props;
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filtredList = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <FindUser>
        <Label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </Label>
        <ul>
          {contacts.length !== 0
            ? filtredList.map(({ id, name, number }) => (
                <User key={id}>
                  {name}: {number}
                  <DeleteBtn type="button" onClick={() => handleDelete(name)}>
                    Delete
                  </DeleteBtn>
                </User>
              ))
            : ''}
        </ul>
      </FindUser>
    );
  }
}
