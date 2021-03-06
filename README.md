# react-basics + ToDoList App

Created with CodeSandbox

1.)create components folder

2.)create a app component in index.js file

3.)create input and button(+) fields init.

4.)create the tasks array with objects and use map function that returns inidividual task in ul tag.

5.)In app.js,imp0rt useState-hook and add value(inputText),onchange(inputchangehandler) attributes in input field.using usestate hook make the input text what we enter in keyboard.

6.)add usestate to tasks and create a addtask function that updates the array with new task and call the addtask function in the onclick attribute of button.

7.)create components folder and create Title.js and inputField.js files init.

8.)create the Title and Inputfield components and import it in app.js anduse these components in app component with its props.

9.)In app.js,change ul to p-tag in map fuction and add checkbox inputfield in the map function

10.)create the toggle status fucntion that changes the checkbox and call it in checkboxchangehandler function with taskindex as argument and call the checkboxchangehandler in the onchange attribute of checkbox inputfield.

note:
useEffect:
It is a hook that runs whenever a compoenent is rendered
It is used for handlind side effects.
side effects are:
if we want to fetch data from a remote server
We want to store data in local storage

11.)import useeffct in app.js,create useeffect function that sets the tasks in the localstorage of the browser in json format.Then access the local storege data in the tasks useState hook.

12.)In InputField.js,add useEffect and useRef hook.use useref to focus the input on field by adding ref attribute in the input filed and using useEffect hook for focussing only one using dependency array init.

13.)create hooks folder and create usehover.js file init.In usehover.js,create a custom hooks called useHover that adds eventlistener which returns hivered in console using useEffect and useRef hook.

note:custom hooks are the function that returns collection of react hooks

14.)In title.js,import the useHover custom hook and add ref attribute to the h1-tag.

RULES of Hooks:

1. React Hooks can’t be used outside react component

2. Two versions of React should never mix

3. Order of execution of the hooks should never change.That is you should never put the hooks under any if-condition or any loops as the hook will be deleted if the cndtion fails which is always be tracked by react .

15.)create ErrorBoundary.js in components folder.create errorboundary class component that returns some jsx if error occurs else renders the actual child component using getDerivedStateFromError method of component class.

16.)Enclose the title component under the errorbounadary tags.

Note:
THree levels of errorboundary:

1.)return null if the component is loew priority

2.)return with some jsx if the component is not high priority

3.)return with the developer details if the component if high priority.
