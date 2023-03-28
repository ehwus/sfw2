import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { DefaultPage } from "./pages/DefaultPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <DefaultPage />
      <Footer />
    </div>
  );
}

export default App;
