import React, { useState } from "react";
import "./Deleteinventory.scss";
import close from "../../assets/images/close-24px.svg";
<<<<<<< Updated upstream
function Deleteinventory() {
=======
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Deleteinventory() {
  const { id } = useParams();
  const [alesucks, setAlesucks] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/` + id)
      .then((response) => {
        setAlesucks(response.data[0].item_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDeleteClick() {
    const url = "http//localhost:8080/api/inventories/" + id;
    axios
      .delete(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Inventories deletion failed", error);
      });
  }

  function handleCancelClick() {
    window.location.replace("/");
  }

>>>>>>> Stashed changes
  return (
    <main className="instock-__main">
      <div className="instock">
        <div className="instock__container">
          <div className="instock__icon-container">
            <img className="instock__icon" src={close} alt="close-icon" />
          </div>
          <h1 className="instock__heading">
            Delete {alesucks} inventory item?
          </h1>
          <p className="instock__paragraph">
            Please confirm that you'd like to delete {alesucks} from the
            inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="instock__button-container">
          <button className="instock__button instock__button--1">Cancel</button>
          <button className="instock__button instock__button--2">Delete</button>
        </div>
      </div>
    </main>
  );
}

export default Deleteinventory;
