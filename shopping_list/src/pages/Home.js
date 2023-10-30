import React, { useState } from "react";
import Lists from "./Lists";

export default function Home({ shoppingLists, loggedInUser }) {
  return (
    <>
      <Lists shoppingLists={shoppingLists} loggedInUser={loggedInUser} />
    </>
  );
}
