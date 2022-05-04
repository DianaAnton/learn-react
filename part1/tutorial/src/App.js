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
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
//============================================================================//
//----------------------------------------------------------------------------//
// Needed at the end of file for it to render something on the page
//----------------------------------------------------------------------------//
export default App;
//============================================================================//
