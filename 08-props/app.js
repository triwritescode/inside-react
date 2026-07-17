const main = document.getElementById("app");

const root = ReactDOM.createRoot(main);

root.render(React.createElement(App));

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counter"),
    React.createElement(Counter, { title: "One" }),
    React.createElement(Counter, { title: "Two" }),
  );
}

function Counter(props) {
  return React.createElement(
    "article",
    null,
    React.createElement("h1", null, props.title),
    React.createElement("p", null, "You clicked 0 times"),
    React.createElement("button", null, "Click me"),
  );
}
