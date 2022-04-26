import React, { useState } from "react";
import "./App.css";

const productList = [
  {
    id: "111111",
    name: "Keyboard",
    stock: 10,
    price: 2000,
  },
  {
    id: "111112",
    name: "Mouse",
    stock: 5,
    price: 1500,
  },
  {
    id: "111113",
    name: "Head Phone",
    stock: 8,
    price: 3500,
  },
];

const TableRow = ({
  id,
  name,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={quantity === 0} onClick={() => decrement(id)}>
          -
        </button>
        <button disabled={quantity === stock} onClick={() => increment(id)}>
          +
        </button>
      </td>
    </tr>
  );
};

const App = () => {
  const [products, setProduct] = useState(
    productList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );

  const incrementQuantity = (id) => {
    setProduct(
      products.map((product) => {
        if (id === product.id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const decrementQuantity = (id) => {
    setProduct(
      products.map((product) => {
        if (id === product.id && product.quantity > 0) {
          product.quantity--;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };
  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <TableRow
              {...item}
              key={item.id}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
          ))}
        </tbody>
        {total > 0 && (
          <tfoot>
            <tr>
              <td colSpan={6}>Total Price: </td>
              <td>{total}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default App;
