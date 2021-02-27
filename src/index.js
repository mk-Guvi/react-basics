import React, { useState } from "react";
import ReactDom from "react-dom";
const root = document.getElementById("root");

const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Grocery",
      isComplete: true
    },
    {
      text: "TIffan",
      isComplete: false
    }
  ]);

  const addTask = (tasktext) => {
    const newTask = {
      text: tasktext,
      isComplete: false
    };
    setTasks([...tasks, newTask]);
  };

  //since usestate is an array that has first element as default value and second as dispatch function(which allows u to change the state)
  //inputText can only be changed by setInputText

  const [inputText, setInputText] = useState("");
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  window.setInputText = setInputText;
  return (
    <div>
      <h1>ToDo List App</h1>
      <input
        type="text"
        value={inputText}
        onChange={inputChangeHandler}
        placeholder="Add New Task"
      />
      <button
        onClick={() => {
          addTask(inputText);
        }}
      >
        +
      </button>
      <ul>
        {tasks.map((task, taskIndex, originalArray) => {
          return <li key={taskIndex}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
};

ReactDom.render(<App />, root);
