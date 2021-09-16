import "./App.css";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "UA-207750898";
  ReactGA.initialize(TRACKING_ID);

  return (
    <div>
      <style>{"body { background-color: #182029; }"}</style>
      <Gallery />;
    </div>
  );
}

export default App;
