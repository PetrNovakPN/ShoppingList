import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Style.css";

export default function ShoppingList({ data, loggedInUser }) {
  const params = useParams();
  const shoppingList = data.find(({ id }) => id == params.id);

  const [newInvitedUser, setNewInvitedUser] = useState("");
  const [invitedUsers, setInvitedUsers] = useState(shoppingList.invited);
  const [items, setItems] = useState(shoppingList.items);
  const [newItemText, setNewItemText] = useState("");

  function handleAddInvitedUser() {
    if (newInvitedUser.trim() === "") {
      return;
    }
    setInvitedUsers([...invitedUsers, newInvitedUser]);
    setNewInvitedUser("");
  }

  function handleDeleteInvitedUser(index) {
    const updatedUsers = [...invitedUsers];
    updatedUsers.splice(index, 1);
    setInvitedUsers(updatedUsers);
  }
  function handleCheckboxChange(index) {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  }
  function handleAddItem() {
    if (newItemText.trim() === "") {
      return;
    }
    const newItem = { text: newItemText, completed: false };
    setItems([...items, newItem]);
    setNewItemText("");
  }

  function handleDeleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  const userIsInvited =
    loggedInUser && shoppingList.invited.includes(loggedInUser);
  const userIsOwner = loggedInUser === shoppingList.owner;

  const navigate = useNavigate();

  if (userIsOwner || userIsInvited) {
    return (
      <div className="shopping-list">
        <h2 className="list-header">Shopping List {shoppingList.name}</h2>
        {userIsOwner && (
          <div>
            <h3 className="sub-header">Invited Users:</h3>
            <ul>
              {invitedUsers.map((user, index) => (
                <li key={index} className="item">
                  {user}
                  <button
                    onClick={() => handleDeleteInvitedUser(index)}
                    className="button"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add invited user"
              value={newInvitedUser}
              onChange={(e) => setNewInvitedUser(e.target.value)}
              className="input"
            />
            <button onClick={handleAddInvitedUser} className="button">
              Add User
            </button>
          </div>
        )}
        {(userIsOwner || userIsInvited) && (
          <div>
            <h3 className="sub-header">Items:</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="item">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheckboxChange(index)}
                    className="checkbox"
                  />
                  {item.text}
                  {userIsOwner && (
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="button"
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a new item"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              className="input"
            />
            <button onClick={handleAddItem} className="button">
              Add Item
            </button>
          </div>
        )}
      </div>
    );
  }
}
