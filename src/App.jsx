import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import useFetchData from "./Hooks/useFetchData";

const App = () => {
  const { data: products, loading } = useFetchData(
    `https://dummyjson.com/products`,
    (data) => {
      return data.products.map((item) => ({
        id: item.id,
        title: item.title,
      }));
    }
  );

  const users = useFetchData(`https://dummyjson.com/users`, (data) => {
    return data.users.map((item) => ({
      firstName: item.firstName,
      lastName: item.lastName,
      maidenName: item.maidenName,
      id: item.id,
    }));
  });
  const posts = useFetchData(`https://dummyjson.com/posts`, (data) => {
    return data.posts.map((item) => ({
      id: item.id,
      title: item.title,
    }));
  });

  return (
    <div>
      <div
        className="show"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Counter lowerBound={-10} />
        <Counter initial={5} upperBound={15} />
        <Counter />
      </div>
      <hr />
      <div className="dataFetch">
        {loading ? (
          <h1>Loading............</h1>
        ) : (
          <div>
            <h1>Products</h1>
            <hr />
            {products?.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </div>
        )}
        {loading ? (
          <h1>Loading............</h1>
        ) : (
          <div>
            <h1>Users</h1>
            <hr />
            {users.data?.map((item) => (
              <li key={item.id}>
                {item.firstName} {item.maidenName} {item.lastName}
              </li>
            ))}
          </div>
        )}
        {loading ? (
          <h1>Loading...............</h1>
        ) : (
          <div>
            <h1>Posts</h1>
            <hr />
            {posts.data?.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
