import React, { useState, useEffect } from "react";
import "./Create.css";
import Button from "@material-ui/core/Button";
import axios from "./axios.js";

// import axios from "./axios.js";

function Create() {
  const [itm, setItm] = useState({
    name: "",
    quantity: ""
  });

  const [inventory, setInventory] = useState({
    items: []
  });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/Create");

      setInventory({ items: request.data });
    }
    fetchData();
  }, []);

  function changeHandler(event) {
    const { name, value } = event.target;
    setItm(prevItm => {
      return {
        ...prevItm,
        [name]: value
      };
    });
  }
  function onChangeItem() {
    const temp = inventory.items.slice();
    temp.push(itm);
    setInventory({ items: temp });
  }

  function submitHandler(event) {
    axios.post("/Create", itm).then(res => {
      onChangeItem();
      console.log(res.data.message);
    });

    setItm({
      name: "",
      quantity: ""
    });
    event.preventDefault();
    // window.location.reload(false);
  }

  return (
    <div className="create">
      <h1>Create Items</h1>
      <div className="create_item">
        <form onSubmit={submitHandler}>
          <h3>Item name:</h3>
          <input
            type="text"
            name="name"
            value={itm.name}
            onChange={changeHandler}
          />
          <br />
          <h3>Quantity:</h3>
          <input
            type="text"
            name="quantity"
            value={itm.quantity}
            onChange={changeHandler}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </form>
      </div>

      <div className="current">
        <h1>Current Inventory</h1>
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>

          {inventory.items.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Create;
//   Create
// </Button>
