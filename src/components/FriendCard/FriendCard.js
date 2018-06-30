import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" >
    <div className="img-container" >
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        <img alt={props.name} src={props.image}/>
      </span>
    </div>
  </div>
);

export default FriendCard;
