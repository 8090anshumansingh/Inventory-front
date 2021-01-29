import React, { useState, useEffect } from "react";
import "./Restock.css";
import Button from "@material-ui/core/Button";
import axios from "./axios.js";

function Invent() {
  const [inventory, setInventory] = useState({
    items: []
  });

  const [itm, setItm] = useState({
    name: "",
    addQuantity: "",
    reduceQuantity: ""
    // amount: ""
  });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/Create");

      setInventory({ items: request.data });
    }
    fetchData();
  }, []);

  function changeHandler(event, itemName, itemQuantity) {
    // event.preventDefault();

    setItm({
      name: itemName,
      addQuantity: parseInt(event.target.value) + parseInt(itemQuantity),
      reduceQuantity: parseInt(itemQuantity) - parseInt(event.target.value)
      // amount: event.target.value
    });
  }

  function onAddItem(index) {
    const temp = inventory.items.slice();
    temp[index].quantity = itm.addQuantity;

    setInventory({ items: temp });
  }
  function onSubItem(index) {
    const temp = inventory.items.slice();
    temp[index].quantity = itm.reduceQuantity;

    setInventory({ items: temp });
  }

  function addHandler(index) {
    console.log(itm);
    axios.post("/Restock", itm).then(res => {
      onAddItem(index);

      console.log(res.data.message);
    });
  }

  function subHandler(index) {
    console.log(itm);
    axios.post("/use", itm).then(res => {
      onSubItem(index);

      console.log(res.data.message);
    });
  }

  return (
    <div className="restock">
      <h1>Restock/Use</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Change amount</th>
          <th>Actions</th>
        </tr>
        {inventory.items.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>

            <td>
              <input
                type="text"
                name="amount"
                // value={itm.amount}
                onChange={e => changeHandler(e, item.name, item.quantity)}
              />
            </td>
            <td>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => addHandler(index)}
              >
                Restock
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={() => subHandler(index)}
              >
                Use
              </Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Invent;
