// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// model.id = nanoid()
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ name: '', number: '' });
  };

  hendelDelete = (id) => {  this.setState( prevState => {
    const newContactsList = prevState.contacts.filter(contact => contact.id !== id);
    return { contacts: newContactsList};
  }) 
 
  };
   
  render() {
    const { name, number, contacts } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">
            <p>Name</p>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="number">
            <p> Number</p>
            <input
              id="number"
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </form>
    );

    <div>
      <p>Contacts</p>
      <label>Fined contacts by name</label>
      <input type="name" name="name" id="contacts.id" />
      <button type="button"> Name </button>
    </div>;


  }
}
