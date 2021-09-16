import "./App.css";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  const TRACKING_ID = "UA-207768070-1";

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview("/");

  return (
    <div>
      <style>{"body { background-color: #182029; }"}</style>
      <Gallery />;
    </div>
  );
}

export default App;
