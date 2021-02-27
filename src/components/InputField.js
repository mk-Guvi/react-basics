import React from "react"

const InputField=({inputText,inputChangeHandler,placeholder,submit

})=>{
  return(
    <div>
  <input
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
    submit//changing addtask to submit
  }
>
  +
</button>
</div>
  )
}

export default InputField