import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class ImageContainer extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "18rem",
            borderWidth: "10px",
            borderColor: "black",
            alignItems: "center"
          }}
        >
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Button variant="primary">{this.props.rarity}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ImageContainer;
