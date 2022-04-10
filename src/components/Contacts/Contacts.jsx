import React from 'react';
import { Contacts, Contac, Btn } from './Contacts.styles';
import PropTypes from 'prop-types';

function Contact({ contacts, onDelete }) {
  return (
    <div>
      <Contacts>
        {contacts.map(contact => (
          <Contac key={contact.id}>
            <span>
              {contact.name} : {contact.number}
            </span>
            <Btn onClick={() => onDelete(contact.id)}>Delete</Btn>
          </Contac>
        ))}
      </Contacts>
    </div>
  );
}

Contacts.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
export default Contact;
