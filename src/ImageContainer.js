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
          <Card.Body className="col">
            <Card.Title>{this.props.title}</Card.Title>
            {this.props.rarity === "Original" && <h2>{this.props.rarity}</h2>}
            {this.props.rarity === "Rare" && (
              <h2 style={{ color: "green" }}>{this.props.rarity}</h2>
            )}
            {this.props.rarity === "Super Rare" && (
              <h2 style={{ color: "darkblue" }}>{this.props.rarity}</h2>
            )}
            {this.props.rarity === "Limited Edition" && (
              <h2 style={{ color: "orange" }}>{this.props.rarity}</h2>
            )}
            {this.props.rarity === "Unique" && (
              <h2 style={{ color: "purple" }}>{this.props.rarity}</h2>
            )}
            <div style={{ justifyContent: "center" }}>
              <Card.Img
                style={{ paddingLeft: "150px", height: "50px", width: "220px" }}
                variant="top"
                src={this.props.soldIcon}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ImageContainer;
