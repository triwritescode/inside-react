const main = document.getElementById("app");

const root = ReactDOM.createRoot(main);

root.render(React.createElement(App));

function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h1", null, "Counter"),
    React.createElement("p", null, "You clicked 0 times"),
    React.createElement("button", null, "Click me"),
  );
}

let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article")[0];
console.log("articleElements:", articleElements);
console.log("articleElement:", articleElement);

setTimeout(() => {
  let articleElements = document.getElementsByTagName("article");
  let articleElement = document.getElementsByTagName("article")[0];
  console.log("articleElements:", articleElements);
  console.log("articleElement:", articleElement);
}, 1000);
