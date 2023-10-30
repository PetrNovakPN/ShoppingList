import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

export default function ShoppingListSnippet({ shoppingList, loggedInUser }) {
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const userIsInvited =
    loggedInUser && shoppingList.invited.includes(loggedInUser);
  const userIsOwner = loggedInUser === shoppingList.owner;

  const handleOpenClick = () => {
    // Use navigate to navigate to the ShoppingList component
    navigate(`/shopping-list/${shoppingList.id}`);
  };

  return (
    <div className="shopping-list">
      <span className="list-header">{shoppingList.name}</span>
      <span className="sub-header">{shoppingList.owner}</span>
      {userIsInvited || userIsOwner ? (
        <button className="button" onClick={handleOpenClick}>
          Open
        </button>
      ) : null}
    </div>
  );
}
