import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export default class Forms extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  hadleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleNameSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState = { name: '', number: '' };
  };
  render() {
    return (
      <div>
        <Formik>
          <Form onSubmit={this.handleNameSubmit}>
            <label htmlFor={this.nameId}>Name</label>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Form>
        </Formik>
      </div>
    );
  }
}
