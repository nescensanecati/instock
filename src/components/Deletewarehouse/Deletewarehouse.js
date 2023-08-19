import React from "react";
import "./Deletewarehouse.scss";
import close from "../../assets/images/close-24px.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

function Deletewarehouse() {
  const { id } = useParams();

  function handleDeleteClick() {
    const url = "http://localhost:8080/api/warehouses/" + id;
    axios
      .delete(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Warehouse deletion failed", error);
      });
  }

  function handleCancelClick() {
    window.location.replace("/");
  }
  return (
    <main>
      <div className="warehouse">
        <div className="warehouse__container">
          <div className="warehouse__icon-container">
            <img
              className="warehouse__icon"
              src={close}
              alt="close-icon"
              onClick={handleCancelClick}
            />
          </div>
          <h1 className="warehouse__heading">
            Delete Television inventory item?
          </h1>
          <p className="warehouse__paragraph">
            Please confirm that you'd like to delete the Washington from the
            list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="warehouse__button-container">
          <button
            className="warehouse__button warehouse__button--1"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="warehouse__button warehouse__button--2"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
}

export default Deletewarehouse;
