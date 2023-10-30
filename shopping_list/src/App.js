import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import ShoppingList from "./pages/ShoppingList";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [shoppingLists, setShoppingLists] = useState([
    {
      id: 1,
      name: "Tesco",
      owner: "Pepa",
      invited: ["Standa", "Franta"],
      items: [{ id: 1, text: "kebab", completed: false }],
    },
    {
      id: 2,
      name: "Bauhaus",
      owner: "Standa",
      invited: ["Vit", "s"],
      items: [{ id: 1, text: "kuřecí", completed: false }],
    },
  ]);

  function SetLoggedInUser(user) {
    setLoggedInUser(user);
  }

  function addShoppingList(newList) {
    setShoppingLists([...shoppingLists, newList]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout SetLoggedInUser={SetLoggedInUser} />}>
          <Route
            index
            element={
              <Home
                loggedInUser={loggedInUser}
                addShoppingList={addShoppingList}
                shoppingLists={shoppingLists}
              />
            }
          />
          <Route path="Lists" element={<Lists />} />
          <Route
            path="/shopping-list/:id"
            element={
              <ShoppingList data={shoppingLists} loggedInUser={loggedInUser} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
