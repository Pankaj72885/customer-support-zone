1.What is JSX, and why is it used?
Answer:
JSX stands for JavaScript XML. It's like a special way of writing code that lets mix HTML-like tags directly inside JavaScript code. Think of it as a bridge between HTML and JavaScript.

Instead of writing complicated JavaScript code to create elements, JSX makes it much easier and more readable. For example:

Without JSX (the hard way):
React.createElement('h1', null, 'Hello World!')

With JSX (the easy way):
<h1>Hello World!</h1>


2. Why do we use JSX?
Answer:
a. Makes code much easier to read and write.
b. Looks familiar to anyone who knows HTML.
c. Helps catch errors at build time.
d. Makes it simple to mix JavaScript logic with HTML structure.
e. React transforms JSX into regular JavaScript behind the scenes.

3. What is the difference between State and Props?
Answer:

Think of Props and State like this:

Props (Properties):
a. Like arguments pass to a function
b. Data that comes FROM OUTSIDE the component (from parent component)
c. Cannot be changed by the component itself (read-only)
d. Like receiving a gift - can use it but can't change what's inside the box

State:
a. Data that belongs TO THE COMPONENT itself
b. Can be changed by the component using special functions
c. When state changes, the component re-renders (updates on screen)
d. Like a personal notebook - write and erase as needed

Example:

function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>; // Can't change props.name
}

function Counter() {
  const [count, setCount] = useState(0); // Can change count
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

4. What is the useState hook, and how does it work?

Answer:
useState is like a special tool that lets your component remember things and update them. Think of it as giving component a memory.

How it works:
1. First call useState with an initial value
2. It gives feedback two things: the current value and a function to update it
3. When update the value, React automatically re-renders your component

Basic syntax:
const [variableName, setVariableName] = useState(initialValue);


Key points:
a. Always use the setter function (like setItems) to update state
b. Never modify state directly
c. State updates trigger re-renders
d. Multiple useState hooks in one component

5. How can you share state between components in React?

Answer: Lifting State Up (Most Common) Move the shared state to the closest common parent component, then pass it down as props.


6.How is event handling done in React?

Event handling in React is like setting up listeners that wait for things to happen (clicks, typing, etc.). It's similar to regular HTML events but with some React-specific features.

Key differences from regular HTML:
a. Event names use camelCase (onClick instead of onclick)
b. You pass functions, not strings
c. React uses SyntheticEvents (wrapped browser events)

Important event handling concepts:
a. Always prevent default behavior when needed (event.preventDefault())
b. Event objects contain useful information (event.target.value)
c. You can pass additional data to event handlers
d. Be careful with arrow functions vs regular functions for performance

Passing data to event handlers:

function TodoList() {
  const [todos, setTodos] = useState(["Task 1", "Task 2"]);
  
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
