// const heading = React.createElement(
//   "h1",
//   { class: "heading" },
//   "Hello This is from react cdn"
// );
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { class: "heading" },
      "This is wrapped inside the div"
    )
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
