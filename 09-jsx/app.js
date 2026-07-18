const main = document.getElementById("app");

const root = ReactDOM.createRoot(main);

root.render(React.createElement(App));

function App() {
  return (
    <section>
      <h1>Counter</h1>
      <section>
        <Counter />
      </section>
    </section>
  );
}

function Counter() {
  return (
    <article>
      <h1>Counter</h1>
      <p>You clicked 0 times</p>
      <button className="button">Click me</button>
    </article>
  );
}
