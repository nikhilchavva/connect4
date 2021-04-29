// reference:-took help from google and friend.
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class Stuff extends Component {
  render() {
    return (
      <div>
        
                  <NavLink to="/game">
<button >Start the game</button></NavLink>

      </div>
    );
  }
}
 
export default Stuff;