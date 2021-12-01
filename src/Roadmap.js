import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";
import { Image } from "react-bootstrap";
import roadmap from "./roadmap.png";

function App() {
  const TRACKING_ID = "UA-207768070-1";

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview("/");

  return (
    <div className="row justify-content-center">
      <Image
        src={roadmap}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
}

export default App;
