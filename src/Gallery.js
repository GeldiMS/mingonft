import React, { Component } from "react";
import { Dropdown, Image } from "react-bootstrap";
import ImageContainer from "./ImageContainer";
import { mingos } from "./mingos";
import twitterIcon from "./twitterIcon.png";
import discordIcon from "./discordIcon.png";
import randGalleryIcon from "./randGalleryIcon.png";

class Gallery extends Component {
  state = {
    rarity: "All"
  };

  setRare = state => {
    this.setState({ rarity: state });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "20px" }}>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Show {this.state.rarity}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.setRare("All")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.setRare("Rare")}>
                  Rare
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.setRare("Super Rare")}>
                  Super Rare
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.setRare("Limited Edition")}>
                  Limited Edition
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.setRare("Unique")}>
                  Unique
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div style={{ padding: "20px" }}>
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
          {this.state.rarity === "All" &&
            mingos.map(mingo => {
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

          {mingos.map(mingo => {
            return (
              mingo.rarity === this.state.rarity && (
                <div>
                  <ImageContainer
                    title={mingo.title}
                    image={mingo.image}
                    rarity={mingo.rarity}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
