import React from "react";
import "./Deleteinventory.scss";
import close from "../../assets/images/close-24px.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

function Deleteinventory() {
  const { id } = useParams();
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

  return (
    <main className="instock-main">
      <div className="instock">
        <div className="instock__container">
          <div className="instock__icon-container">
            <img
              className="instock__icon"
              src={close}
              alt="close-icon"
              onClick={handleCancelClick}
            />
          </div>
          <h1 className="instock__heading">
            Delete Television inventory item?
          </h1>
          <p className="instock__paragraph">
            Please confirm that you'd like to delete Television from the
            inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="instock__button-container">
          <button
            className="instock__button instock__button--1"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="instock__button instock__button--2"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
}

export default Deleteinventory;
