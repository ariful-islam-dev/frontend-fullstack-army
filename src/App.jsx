import React from "react";
import { useApp } from "./useApp";

const App = () => {
  const { user, loading, id, max, nextUser, prevUser } = useApp();
  return (
    <div>
      <h1>User Id: {id}</h1>
      <div className="userInfo">
        {user === null && loading && <h1>Loading........</h1>}
        {user && (
          <article>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>
              Address:{" "}
              {user.address && (
                <>
                  <span>{user.address.street}</span>,
                  <span>{user.address.suite}</span>,
                  <span>{user.address.city}</span>,
                  <span>{user.address.zipcode}</span>
                </>
              )}
            </p>
          </article>
        )}
      </div>
      <div className="usersId">
        <button disabled={id === 1} onClick={prevUser}>
          Previous
        </button>
        <button disabled={id === max} onClick={nextUser}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
