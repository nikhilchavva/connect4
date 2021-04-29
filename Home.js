import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Instructions:</h2>
        <p><ol>
            <li>This is a game that can be played by 2 people at once.</li>
            <li>A player connects 4 pieces be it diagnolly, horizontally or vertically trying to successfully connect 4 in a row.</li>
            <li>Each person hets a chance to drop a piece alternately</li>
            <li>If a person successfullyconnects 4 in a row, he wins. Else if the board is filled completely, it results in a stalemate.</li>
            <li>If the game is completed and the players want to play again, typically the loser takes the first chance.</li>
            <li>This is a game of intellect and wit, so play accordingly!</li>
            </ol></p>
      </div>
      
      
    );
  }
}
 
export default Home;