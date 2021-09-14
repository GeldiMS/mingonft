import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ImageContainer from "./ImageContainer";
import { mingos } from "./mingos";

class Gallery extends Component {
  //   state = {
  //     rarity: "All"
  //   };

  //   setRare = () => {
  //     this.setState({ rarity: "Rare" });
  //   };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "50px", marginBottom: "50px" }}>
          <Button
            href="https://twitter.com/MingoNFTs"
            variant="primary"
            onClick={() => this.setRare()}
          >
            Twitter
          </Button>
          <Button
            href="https://discord.gg/bvTZUD8mc9"
            variant="dark"
            onClick={() => this.setRare()}
          >
            Discord
          </Button>
          <Button
            href="https://www.randgallery.com/algo-collection/?address=MINGOOD72RIIAOGO7GQWOTENVV3FJPBRBPRWXBINAX45XH6WZSE2MVLUVM"
            variant="success"
            onClick={() => this.setRare()}
          >
            Rand Gallery
          </Button>
        </div>
        <div
          style={{
            marginLeft: 30,
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridGap: 1,
            gridRowGap: 20
          }}
        >
          {mingos.map(mingo => {
            return (
              <div>
                <ImageContainer
                  title={mingo.title}
                  image={mingo.image}
                  rarity={mingo.rarity}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
