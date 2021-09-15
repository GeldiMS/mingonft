import React, { Component } from "react";
import { Image } from "react-bootstrap";
import ImageContainer from "./ImageContainer";
import { mingos } from "./mingos";
import twitterIcon from "./twitterIcon.png";
import discordIcon from "./discordIcon.png";
import randGalleryIcon from "./randGalleryIcon.png";

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
          <a href="https://twitter.com/MingoNFTs">
            <Image width="50px" src={twitterIcon} />
          </a>
          <a href="https://discord.gg/bvTZUD8mc9">
            <Image width="50px" src={discordIcon} />
          </a>
          <a href="https://www.randgallery.com/algo-collection/?address=MINGOOD72RIIAOGO7GQWOTENVV3FJPBRBPRWXBINAX45XH6WZSE2MVLUVM">
            <Image
              width="50px"
              height="50px"
              style={{ margin: "10px" }}
              src={randGalleryIcon}
            />
          </a>
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
