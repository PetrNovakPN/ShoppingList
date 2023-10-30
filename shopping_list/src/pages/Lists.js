import React from "react";
import ShoppingListSnippet from "./ShoppingListSnippet";

export default function Lists({ shoppingLists, loggedInUser }) {
  return (
    <div>
      {shoppingLists.map((list) => (
        <ShoppingListSnippet
          key={list.id}
          shoppingList={list}
          loggedInUser={loggedInUser}
        />
      ))}
    </div>
  );
}
