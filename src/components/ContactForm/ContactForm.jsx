import React from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled'
import PropTypes from 'prop-types';

class ContactForm extends React.Component{
    state = {
    name: '',
    number: '',
    }
    
   handleChenge = e => {
   const {name, value} = e.currentTarget

    this.setState({ [name]: value })
   }
    
         handleSubmit = e => {
    e.preventDefault()
             
             this.props.onSubmit(this.state);
  }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
        <Label >
            Name
<Input 
  type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChenge}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
    />
        </Label>
        <Label > <span>Number</span> 
            <Input
  type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChenge}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        </Label>
        
        <Button type='submit' >Add contact</Button>

      </Form>
        )
    }



}    

ContactForm.protoType = {
  handleChenge: PropTypes.func.isRequired,
}

export default ContactForm;