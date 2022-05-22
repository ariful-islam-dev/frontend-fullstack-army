import React, { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const searchCB = (contact) => {
    contact.name.includes(searchTerm) || contact.name.includes(searchTerm);
  };

  let filteredContacts = [];

  if (filter === "All") {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }
  return (
    <div>
      <table style={{ border: "1px solid #000" }}>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Email:</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
