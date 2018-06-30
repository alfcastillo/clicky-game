import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Panels/Navbar";
import Header from "./components/Panels/Header";
import Panel from "./components/Panels/Panel";

let total = 0;
let guessList = [false];
let gameStatus = "Click an Image to begin";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    let i = parseInt(id);
    if (!guessList[i]){
      total++;
      guessList[i] = true;
      gameStatus = "You Guessed Correctly"
    console.log("FRIEND ID:",i, "Has not been selected");
    console.log("Remaining friends: ", friends);
    console.log("Guess List: ",guessList[i]);
    } else {
      console.log("You already Selected this friend");
      total = 0;
      gameStatus = "You Guessed Incorrectly"
    }
    
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title> Clicky Game  </Title>
         
         <h2> Click on an Image to earn points, but don't click more than once </h2>
       
        <span>
          <h2> Total count: {total} </h2>
          <h2> {gameStatus}</h2>
        </span>
        <br/>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
