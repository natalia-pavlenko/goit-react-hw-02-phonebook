const ContactsList = ({ contacts, onDelete }) => {

 
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
            <span> {name}</span>: <span>{number}</span>
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
