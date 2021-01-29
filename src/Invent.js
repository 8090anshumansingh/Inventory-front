import React, { useState, useEffect } from "react";
import "./Invent.css";
import axios from "./axios.js";
import { MDBDataTable } from "mdbreact";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Invent() {
  const [items, setItems] = useState([]);

  const Header = ["Item", "Quantity"];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/Create");

      setItems(request.data);
    }
    fetchData();
  }, []);

  const data = {
    columns: [
      {
        label: "Item",
        field: "name",
        width: 150
      },
      {
        label: "Quantity",
        field: "quantity",
        width: 150
      }
    ],
    rows: items
  };

  return (
    <div className="invent">
      <h1>Inventory list</h1>
      <MDBDataTable striped bordered small data={data} />
    </div>
  );
}

export default Invent;
