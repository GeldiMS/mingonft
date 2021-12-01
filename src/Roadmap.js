import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";
import { Image, Button } from "react-bootstrap";
import roadmap from "./roadmap.png";

function App() {
  const TRACKING_ID = "UA-207768070-1";

  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview("/");

  return (
    <div>
      <Image
        src={roadmap}
        style={{
          width: "100%",
          height: undefined,
          aspectRatio: 1
        }}
      />
    </div>
  );
}

export default App;
