import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Karen Smith',
        email: 'karen@gmail.com',
        phone: '333-333-333',
      },
      {
        id: 2,
        name: 'John doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-555',
      },
      {
        id: 3,
        name: 'Henry',
        email: 'henry@gmail.com',
        phone: '111-111-111',
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
