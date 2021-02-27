import React, { useState } from "react";
import ReactDom from "react-dom";
import Title from "./components/Title";
import InputField from "./components/InputField";
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

  const addTask = () => {
    const newTask = {
      text: inputText,
      isComplete: false
    };
    setTasks([...tasks, newTask]);
    setInputText("");
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
      {/* <h1>ToDo List App</h1> */}
      <Title title="ToDO List APP" />
      <InputField
      inputText={inputText}
      inputChangeHandler={inputChangeHandler} 
      placeholder="add new tasks"
      submit={addTask}
      />

      {/* <input
        type="text"
        value={inputText}
        onChange={inputChangeHandler}
        placeholder="Add New Task"
      />
      <button
        onClick={
          //commenting this as we did not pass the tasktext as the parameter in addtask function
          //   () => {
          //   addTask(inputText);
          // }
          addTask
        }
      >
        +
      </button> */}

      <ul>
        {tasks.map((task, taskIndex, originalArray) => {
          return <li key={taskIndex}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
};

ReactDom.render(<App />, root);
