import React from "react";
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';
import {Title, Div} from './App.styled'



class App extends React.Component{
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formSubmit = data => {
    const { name, number } = data;
     const { contacts } = this.state;
 const isExist = this.state.contacts.some(
      (prevData) =>
        prevData.name === name &&
        prevData.number === number
    );
     if (isExist) {
      alert(
        `${name} is already in contacts`
      );
      return;
    }
    this.setState({ name: name, number: number });
    contacts.push({ id: nanoid(), name: name, number: number });
}

 changeFilter = e => {
   this.setState({ filter: e.target.value });
  };
  
 getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized),
    );
 };
  
  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== id),
    });
  };
  

  render() {
    return (
      
      <Div>
         <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter
          filter={this.changeFilter}
        value={this.state.filter}/>
        <ContactList
          contacts={this.getFilteredContacts()}
        deleteContact={this.deleteContact}
        />
        </Div>
        
    )
  }

}
export default App;