import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <h1>About the project</h1>
      <p>
        This application is a simple inventory management system. It interacts
        with an API to access a live database so the information modified,
        created, or deleted on this application will impact the database. Feel
        free to mess around with the application in anyway you feel like. Using
        the above links in the navigation bar will allow you to interact with
        the various functions of this application. What each page does is
        described below.
      </p>
      <ul>
        <li>
          <b>Inventory: </b>Shows the name of items in inventory and their
          current quantity.
        </li>
        <li>
          <b>Restock: </b>Change quantity of items in inventory by entering the
          amount and pressing the restock/use buttons.
        </li>
        <li>
          <b>Create items: </b>Fill in the respective item information and press
          the create button to add new items to the inventory list.
        </li>
        <li>
          <b>Remove items: </b>Remove items in the inventory list by selecting
          the delete button next to the item in the table.
        </li>
      </ul>
      <h1>About Me</h1>
      <p>
        Project created by Anshuman singh. A student in IIIT Vadodara. This was
        my first time using the MERN tech stack to create a web application.
      </p>
    </div>
  );
}

export default Info;
