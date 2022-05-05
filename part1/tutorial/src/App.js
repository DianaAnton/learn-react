//============================================================================//
//----------------------------------------------------------------------------//
/*
      RENDERING DYNAMIC CONTENT
*/
//----------------------------------------------------------------------------//
// function that doesn't receive any parameters
// it's assigned to a constant
// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   // render dynamic content into page
//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      MULTIPLE COMPONENTS
*/
//----------------------------------------------------------------------------//
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/* 
      PROPS: Passing data to components
*/
//----------------------------------------------------------------------------//
// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" />
//       <Hello name="Daisy" />
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/* 
    PROPS: Multiple values

        There can be an arbitrary number of props and their values can be 
"hard coded" strings or results of JavaScript expressions. If the value of the 
prop is achieved using JavaScript it must be wrapped with curly braces.
*/
//----------------------------------------------------------------------------//
// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      COMPONENT HELPER FUNCTIONS
*/
//----------------------------------------------------------------------------//
// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - props.age;
//   };

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };
//
// const App = () => {
//   return (
//     <div>
//       <Hello name="Diana" age="22" />
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      DESTRUCTING 
*/
//----------------------------------------------------------------------------//
// const Hello = (props) => {
// v3
// const Hello = ({ name, age }) => {
//   // v1
//   // const name = props.name;
//   // const age = props.age;
//   // v2
//   // const { name, age } = props;
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Hello name="Diana" age="22" />
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      PAGE RE-RENDERING 
*/
//----------------------------------------------------------------------------//
// const App = (props) => {
//   const { counter } = props;
//   return <div>{counter}</div>;
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      STATEFUL COMPONENTS
*/
//----------------------------------------------------------------------------//
// import { useState } from "react";

// const App = () => {
//   // counter gets the initial state which is set to zero
//   // setCounter is assigned to a function that will be used to modify the state.
//   const [counter, setCounter] = useState(0);
//   // 1000 ms = 1 s
//   /*
//     Every time the setCounter modifies the state it causes the component to
//   re-render. The value of the state will be incremented again after one second,
//   and this will continue to repeat for as long as the application is running.
//   */
//   setTimeout(() => setCounter(counter + 1), 1000);
//   console.log("rendering...", counter);
//   return <div>{counter}</div>;
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      EVENT HANDLERS
*/
//----------------------------------------------------------------------------//
// import { useState } from "react";
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     console.log("clicked");
//   };
//   // alternate way to define it
//   // <button onClick={() => console.log("clicked")}> plus </button>;

//   // return (
//   //   <div>
//   //     <div>{counter}</div>
//   //     <button onClick={handleClick}>plus</button>
//   //   </div>
//   // );
//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>plus</button>
//       <button onClick={() => setCounter(0)}>zero</button>
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      EVENT HANDLER IS A FUNCTION
*/
//----------------------------------------------------------------------------//
// import { useState } from "react";
//
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>plus</button>
//       <button onClick={setToZero}>zero</button>
//     </div>
//   );
// };
//============================================================================//
//----------------------------------------------------------------------------//
/*
      PASSING STATE TO CHILD COMPONENTS
*/
//----------------------------------------------------------------------------//
import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  );
};
//============================================================================//
//----------------------------------------------------------------------------//
// Needed at the end of file for it to render something on the page
//----------------------------------------------------------------------------//
export default App;
//============================================================================//
