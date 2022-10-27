import {Button, Ul, Li} from './ContactList.styled'

const ContactList = ({ id, contacts, deleteContact }) => (
    <Ul>
        {contacts.map(contact => (
            <Li key={contact.id}>
                <span>{contact.name}
                {': '}
                {contact.number}</span>
                
                <Button type="button"  onClick={() => deleteContact(contact.id)} >delete</Button>
            </Li>
            
        ))}
   </Ul>)
        
        
export default ContactList;