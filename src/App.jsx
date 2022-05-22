import React, { useState } from "react";
import ContactForm from "./Components/ContactForm";
import Table from "./Components/Table";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
  };
  console.log(contacts);
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Contact APP</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
