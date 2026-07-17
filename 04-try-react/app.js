const main = document.getElementById("app");

const root = ReactDOM.createRoot(main);

root.render(React.createElement(App));

function App() {
  return React.createElement("button", null, "Click me");
}

console.log(React.createElement(App));
