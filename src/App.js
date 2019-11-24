import React, {Component} from 'react';
import Tiles from "./components/Tiles/Tiles";

class App extends Component {
  state= {
    tiles: [false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,false,false,false,],
    randomTileNum: Math.floor(Math.random() * 36),
  };
  openTile = index => {
    const tiles = [...this.state.tiles];
    const mine = this.state.randomTileNum;
    tiles[index] = true;

    if(index === mine) {
      console.log('Found!');
      tiles[index] = 'bomb';
    }
    this.setState({tiles});

  };

  render() {
    return (
      <Tiles tiles={this.state.tiles}
             openTile={this.openTile}
      />
    );
  }
}

export default App;