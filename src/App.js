import classes from "./App.module.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <img
        className={classes.background}
        src="/images/background.png"
        alt="pine forest"
      />
      <Login />
    </div>
  );
}

export default App;
