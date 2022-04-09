import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Input, Formm, Btn } from './Forms.styles';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

export default class Forms extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleNameSubmit = (values, { resetForm}) => {
    this.props.onSubmit(this.state);
    console.log(values);
    resetForm();
  };
  //resetForm = () => {
  //  this.setState({ name: '', number: '' });
  //};

  render() {
    return (
      <div>
        <Formik
          initialValues={this.state}
          validationSchema={schema}
          onSubmit={this.handleNameSubmit}
        >
          <Formm>
            <label htmlFor={this.nameId}>Name</label>
            <Input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
            <ErrorMessage name="name" component="div" />
            <label htmlFor={this.numberId}>Number</label>
            <Input
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              id={this.numberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
            <ErrorMessage name="number" component="div" />
            <Btn type="submit">Add contact</Btn>
          </Formm>
        </Formik>
      </div>
    );
  }
}
