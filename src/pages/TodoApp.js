import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (task && date) {
      setTasks([...tasks, { task, date }]);
      setTask("");
      setDate("");
    }
  };

  const deleteTask = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h2>TODO List</h2>
      <input type="text" className="form-control" placeholder="Task" value={task} onChange={e => setTask(e.target.value)} />
      <input type="date" className="form-control mt-2" value={date} onChange={e => setDate(e.target.value)} />
      <button className="btn btn-primary mt-2" onClick={addTask}>Add Task</button>
      <ul className="list-group mt-3">
        {tasks.map((t, index) => (
          <li key={index} className="list-group-item">
            {t.task} - {t.date}
            <button className="btn btn-danger btn-sm float-end" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
