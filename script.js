// Creating a simple React element that displays a message
// const container = React.createElement(
//   "div",
//   {},
//   "Hello from React!"
// );
// // console.log(h2); // Uncomment to see the output

// Creating a root element to render the React app in the "root" div
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// // console.log(root); // Uncomment to see the root element
// root.render(container); // Uncomment to render the initial container

// Creating a container for a form with two input fields
const container = React.createElement(
  "div",
  {}, // No additional props for the outer div
  React.createElement("form", {}, [ // Create a form element
    React.createElement(
      "div",
      { key: 1 }, // Each child div has a unique key
      React.createElement("label", { htmlFor: "name", key: 1 }, "Username: "), // Label for username
      React.createElement("input", { type: "text", id: "name", key: 2 }) // Input field for username
    ),
    React.createElement(
      "div",
      { key: 2 }, // Unique key for the password div
      React.createElement("label", { htmlFor: "pass", key: 3 }, "Password: "), // Label for password
      React.createElement("input", { type: "password", id: "pass", key: 4 }) // Input field for password
    ),
    React.createElement("button", { key: 3 }, "Submit") // Submit button for the form
  ])
);

// Render the container with the form in the root div
ReactDOM.createRoot(document.querySelector("#root")).render(container);
