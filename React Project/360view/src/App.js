import "./App.css";
import RightPanel from "./panel/RightPanel";
import LeftPanel from "./panel/LeftPanel";
import Header from "./panel/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
