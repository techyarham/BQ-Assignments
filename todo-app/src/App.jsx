import { useState } from "react";
import './App.css'
function App() {
  const [task, setTask] = useState("");     
  const [tasks, setTasks] = useState([]);    
  const [editIndex, setEditIndex] = useState(null); 


  function handleAddOrUpdate() {
    if (task.trim() === "") return;

    if (editIndex === null) {
   
      setTasks([...tasks, task]);
    } else {
 
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null); 
    }

    setTask("");
  }


  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
    }
  }

  function editTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div id="main" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Todo App</h1>
<div className="add-section">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button id="add-butt" onClick={handleAddOrUpdate}>
        {editIndex === null ? <span class="material-symbols-outlined">
add
</span>: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>}
      </button>
</div>
    <div className="content">
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button className="content-butt" onClick={() => editTask(index)} style={{ color: "blue" }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
          </button>{" "}
            <button className="content-butt" onClick={() => deleteTask(index)} style={{ color: "red" }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440-200H200q-33 0-56.5-23.5T120-280v-360Zm80 0v360h240v-360H200Zm0 0v360-360Z"/></svg>
            </button>
          </li>
        ))}
      </ul></div>
    </div>
  );
}

export default App;
