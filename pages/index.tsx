import { use, useState } from "react";
import { classicNameResolver } from "typescript";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

const Home = function () {
  const [todoItem, setTodoItem] = useState("");
  // const [items, setItems] = useState(["Buy milk", "Buy egg", "Buy bread"]);
  const [items, setItems] = useState([
    {
      id: "1234",
      message: "Buy milk",
      done: false,
    },
  ]);
  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);
      setTodoItem("");
    }
  };
  const handleTodo = (e: any) => {
    setTodoItem(e.target.value);
  };

  const handleToggle = function (id: any) {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    setItems(_items);
  };

  return (
    <div className="container-div">
      <h1 className="heading-main">Todo app</h1>

      <div className="input-div">
        <label htmlFor="input-here" className="input-label">
          Write Below :
        </label>
        <input
          type="text"
          name=""
          id="input-here"
          placeholder="input"
          value={todoItem}
          // onChange={(e) => setTodoItem(e.target.value)}
          onChange={handleTodo}
        />
        <button type="button" className="input-button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="input-ul">
        {items
          .filter(({ done }) => !done)
          .map(({ id, message, done }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames("item", { done })}
              id="input-li"
            >
              {/* {message}-{id} */}
              {message}
            </li>
          ))}
        {/* //  <li>{todoItem}</li>  */}

        {items
          .filter(({ done }) => done)
          .map(({ id, message, done }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames("item", { done })}
            >
              {/* {message}-{id} */}
              {message}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
