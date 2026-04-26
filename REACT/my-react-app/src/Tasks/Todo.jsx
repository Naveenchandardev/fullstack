import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const saveTask = () => {
    console.log("testing", task);
    if (task.trim() === "") return;

    if (editIndex === null) {
      setList([...list, task]);
    } else {
      const newList = [...list];
      newList[editIndex] = task;
      setList(newList);
      setEditIndex(null);
    }

    setTask("");
  };

  const deleteTask = (i) => {
    setList(list.filter((item, index) => index !== i));
  };

  const editTask = (i) => {
    setTask(list[i]);
    setEditIndex(i);
  };

  return (
    <div className="home-container">
      <h1>Todo</h1>

      <input
        value={task}
        onChange={(e) => {
    
        setTask(e.target.value);
      }}
        placeholder="Enter task"
      />

      <button onClick={saveTask}>
        {editIndex === null ? "Add" : "Update"}
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}

            <button   style={{ marginLeft: "8px" }}
             onClick={() => editTask(index)}>
              Edit
            </button>

            <button
              style={{ marginLeft: "8px" }}
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