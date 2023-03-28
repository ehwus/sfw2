import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { DefaultPage } from "./pages/DefaultPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-full h-full bg-red-50">
      <main className="max-w-screen-xl mx-auto">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<DefaultPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
