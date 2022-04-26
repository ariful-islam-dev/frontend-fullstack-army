/**
 * Any function that return a JSX is a function component in React
 * - Name must be capital
 * - React return a piece of HTML(JSX)
 * - It always accept an Object as an argument
 * - We can't call or invoke this function
 * -  We have user the component as a html tag
 *
 * Anything that is dynamic can be dynamic using props
 */

import { useState } from "react";

// const ListItem = (props) => (
//   <li style={{ listStyleType: "none", display: "flex", alignItems: "center" }}>
//     <input type="checkbox" name="" id="" checked={props.check} />
//     <p>
//       {props.title}
//       <span>{props.children}</span>
//     </p>
//     <button style={{ marginLeft: "auto" }}>Delete</button>
//   </li>
// );

// const taskList = [
//   { id: 1, text: "Title -1", checked: false },
//   { id: 2, text: "Title -2", checked: false },
//   { id: 3, text: "Title -3", checked: false },
//   { id: 4, text: "Title -4", checked: true },
//   { id: 5, text: "Title -5", checked: false },
//   { id: 6, text: "Title -6", checked: false },
//   { id: 7, text: "Title -7", checked: true },
//   { id: 8, text: "Title -8", checked: false },
//   { id: 9, text: "Title -9", checked: true },
//   { id: 10, text: "Title -10", checked: false },
//   { id: 11, text: "Title -11", checked: false },
// ];

// const taskLi = taskList.map((item) => {
//   const li = document.createElement("li");
//   li.text = item.text;
// });

// const App = (props) => {
//   return (
//     <div>
//       <ul>
//         {taskList.map((item) => (
//           <ListItem
//             key={item.id}
//             title={item.text}
//             check={item.checked}
//           ></ListItem>
//         ))}
//       </ul>
//     </div>
//   );
// };

const ProductListItem = ({ productName, stock }) => {
  const [count, setCount] = useState(0);

  // let count = 0;

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>
        Count: {count}/ {stock}
      </h1>
      <p>{productName}</p>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>

      <button onClick={increment} disabled={count === stock}>
        Increment
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProductListItem productName="Keyboard" stock={15} />
      <ProductListItem productName="Mouse" stock={5} />
    </div>
  );
};

export default App;
