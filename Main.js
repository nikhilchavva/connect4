// reference:-took help from google and friend.
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import player from "./player";
  import game from "./game";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1><marquee direction = "left">CONNECT FOUR !!</marquee></h1>
          <h1><marquee direction = "right">CONNECT FOUR  !!</marquee></h1>

          <ul className="header">
          <li><NavLink exact to="/">Home:</NavLink></li>
            <li><NavLink to="/player">Game:</NavLink></li>
           
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/player" component={player}/>
            <Route path="/game" component={game}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;