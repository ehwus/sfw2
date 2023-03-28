import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { DefaultPage } from "./pages/DefaultPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <DefaultPage />
    </div>
  );
}

export default App;
