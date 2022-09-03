import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import "../styles/tasklist.css";

interface Task {
  id: number;
  title: string;
  details: string;
  color: string;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [style, setStyle] = useState("color-tag");
  const [error, setError] = useState("");

  const changeYellow = () => {
    setStyle("yellow");
  };
  const changeOrange = () => {
    setStyle("orange");
  };
  const changeRed = () => {
    setStyle("red");
  };
  const changePurple = () => {
    setStyle("purple");
  };
  const changeBlue = () => {
    setStyle("blue");
  };
  const changeWhite = () => {
    setStyle("white");
  };

  function handleCreateNewTask() {
    if (!newTaskTitle) {
      showError("Need to add Topic!");
      return;
    }

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      details: newTaskDetails,
      color: style,
    };

    setTasks([...tasks, newTask]);
    setNewTaskDetails("");
    setNewTaskTitle("");
  }

  function showError(message: string) {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 2500);
  }

  function handleRemoveTask(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    tasks.splice(taskIndex, 1);
    setTasks((tasks) => [...tasks]);
  }

  return (
    <section className="task-list container">
      <header>
        <div className="input-group">
          <p style={{ margin: "0 2% 0 0" }}>Topic:</p>
          <input
            type="text"
            style={{ width: "300px" }}
            placeholder="Add todo topic"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
        </div>

        <div className="input-group" style={{ marginRight: "3%" }}>
          <button
            onClick={changeYellow}
            style={{
              backgroundColor: "yellow",
              borderRadius: "20px",
              margin: "1%",
            }}
          />
          <button
            onClick={changeOrange}
            style={{
              backgroundColor: "orange",
              borderRadius: "20px",
              margin: "1%",
            }}
          />

          <button
            onClick={changeRed}
            style={{
              backgroundColor: "red",
              borderRadius: "20px",
              margin: "1%",
            }}
          />

          <button
            onClick={changeBlue}
            style={{
              backgroundColor: "blue",
              borderRadius: "20px",
              margin: "1%",
            }}
          />

          <button
            onClick={changePurple}
            style={{
              backgroundColor: "purple",
              borderRadius: "20px",
              margin: "1%",
            }}
          />

          <button
            onClick={changeWhite}
            style={{
              backgroundColor: "white",
              border: "dotted 1px gray",
              borderRadius: "20px",
              margin: "1%",
            }}
          />

          <button
            style={{ padding: "15px" }}
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          >
            Add
          </button>
        </div>
      </header>
      <div style={{ textAlign: "right", marginRight: "1%" }}>
        {error.length > 0 && <span className="non-topic">{error}</span>}
      </div>
      <header>
        <div className="input-group">
          <p>Details</p>
        </div>
      </header>

      <header>
        <input
          type="text"
          maxLength={180}
          placeholder="Tell me your duty details..."
          onChange={(e) => setNewTaskDetails(e.target.value)}
          value={newTaskDetails}
        />
      </header>
      <div style={{ border: "solid  0.5px #442a2a38", margin: "2% 2%" }}></div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li className={task.color} key={task.id}>
              <div>
                <p>{task.title}</p>
                <p className="details">{task.details}</p>
              </div>
              <div className="input-group">
                <button type="button" onClick={() => handleRemoveTask(task.id)}>
                  <FiTrash size={20} color="gray" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
