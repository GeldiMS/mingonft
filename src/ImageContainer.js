import React, { Component } from "react";
import { Card } from "react-bootstrap";

class ImageContainer extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            width: "18rem",
            borderWidth: "10px",
            borderColor: "black"
          }}
        >
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            {this.props.rarity === "Original" && <h2>{this.props.rarity}</h2>}
            {this.props.rarity === "Rare" && (
              <h2 style={{ color: "lightBlue" }}>{this.props.rarity}</h2>
            )}
            {this.props.rarity === "Super Rare" && (
              <h2 style={{ color: "#6DABC4" }}>{this.props.rarity}</h2>
            )}
            {this.props.rarity === "Limited Edition" && (
              <h2 style={{ color: "#B19DE5" }}>{this.props.rarity}</h2>
            )}
            {this.props.rarity === "Unique" && (
              <h2 style={{ color: "purple" }}>{this.props.rarity}</h2>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ImageContainer;
