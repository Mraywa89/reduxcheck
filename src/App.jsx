import "./App.css";
import Addtask from "./components/Addtask";
import Listtasks from "./components/Listtasks";

function App() {
  return (
    <div className="App">
      <Addtask />
      <Listtasks />
    </div>
  );
}

export default App;
