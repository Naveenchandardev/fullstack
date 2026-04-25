import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (deleteIndex) => {
    const newList = list.filter(
      (item, index) => index !== deleteIndex
    );

    setList(newList);
  };

  return (
    <div className="home-container">
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}

            <button  style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;