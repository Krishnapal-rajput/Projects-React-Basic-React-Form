// const container = React.createElement(
//   "div",
//   {},
//   "Hello from React!"
// );
// // console.log(h2);

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// // console.log(root);
// root.render(container);

const container = React.createElement(
  "div",
  {},
  React.createElement("form", {}, [
    React.createElement(
      "div",
      { key: 1 },
      React.createElement("label", { htmlFor: "name", key: 1 }, "Username: "),
      React.createElement("input", { type: "text", id: "name", key: 2 })
    ),
    React.createElement(
      "div",
      { key: 2 },
      React.createElement("label", { htmlFor: "pass", key: 3 }, "Password: "),
      React.createElement("input", { type: "password", id: "pass", key: 4 })
    ),
    React.createElement("button", { key: 3 }, "Submit"),
  ])
);

ReactDOM.createRoot(document.querySelector("#root")).render(container);
