import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages"

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
  <Home/>
    </Router>
  );
}

export default App;
