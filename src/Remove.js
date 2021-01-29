import React, { useState, useEffect } from "react";
import "./Remove.css";
import Button from "@material-ui/core/Button";
import axios from "./axios.js";

function Remove() {
  const [inventory, setInventory] = useState({
    items: []
  });

  // const [itm, setItm] = useState({
  //   name: "",
  //   quantity: "",
  // });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/Create");
      setInventory({ items: request.data });
    }
    fetchData();
  }, []);

  function onChangeItem(index) {
    const temp = inventory.items.slice();

    temp.splice(index, 1);
    setInventory({ items: temp });
  }

  async function clickHandler(item1, index) {
    await axios.post("/Remove", item1).then(res => {
      // Helper function to remove item from state
      onChangeItem(index);
      // window.location.reload(false);
      console.log(res.data.message);
    });
  }

  return (
    <div className="remove">
      <h1>Remove</h1>
      <div className="remove_items">
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
          {inventory.items.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  type="submit"
                  value={item}
                  onClick={() => clickHandler(item, index)}
                  variant="contained"
                  color="secondary"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Remove;
