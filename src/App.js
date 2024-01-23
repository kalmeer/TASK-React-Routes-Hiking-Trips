import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Home />
      <TripsList />
      <TripDetail />
    </div>
  );
}

export default App;
