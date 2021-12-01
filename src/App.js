import "./App.css";
import Gallery from "./Gallery";
import Roadmap from "./Roadmap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";
import React from "react";
import { Button } from "react-bootstrap";

const TRACKING_ID = "UA-207768070-1";

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview("/");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: "Go to Mingos",
      currentPage: "roadmap"
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage() {
    if (this.state.buttonName === "Go to Mingos") {
      this.setState({ buttonName: "Go to Roadmap", currentPage: "mingos" });
    } else if (this.state.buttonName === "Go to Roadmap") {
      this.setState({ buttonName: "Go to Mingos", currentPage: "roadmap" });
    }
  }
  render() {
    return (
      <div>
        <div style={{ padding: "20px" }}>
          <Button onClick={this.changePage}>{this.state.buttonName}</Button>
        </div>
        <style>{"body { background-color: #182029; }"}</style>
        {this.state.currentPage === "roadmap" && <Roadmap />}
        {this.state.currentPage === "mingos" && <Gallery />}
      </div>
    );
  }
}

export default App;
