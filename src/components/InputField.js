import React, { useEffect, useRef } from "react";

const InputField = ({ inputText, inputChangeHandler, placeholder, submit }) => {
  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.focus(); //InputRef returns object where current refers the input field
  }, []);
  return (
    <div>
      <input
        ref={InputRef} //ref is the react special property for useref
        type="text"
        value={inputText}
        onChange={inputChangeHandler}
        placeholder={placeholder}
      />
      <button
        onClick={
          //commenting this as we did not pass the tasktext as the parameter in addtask function
          //   () => {
          //   addTask(inputText);
          // }
          submit //changing addtask to submit
        }
      >
        +
      </button>
    </div>
  );
};

export default InputField;
