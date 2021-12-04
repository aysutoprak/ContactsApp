import { useState, useEffect } from "react";
import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Noodle",
      phone_number: "101010",
    },
    {
      fullname: "Kedi",
      phone_number: "123123",
    },
    {
      fullname: "Su",
      phone_number: "998877",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contact</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
