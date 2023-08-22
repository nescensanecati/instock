import React from "react";
import "./Deletewarehouse.scss";
import close from "../../assets/images/close-24px.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Deletewarehouse() {
  const { id } = useParams();
  const [warehouseName, setWarehouseName] = useState();



  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/` + id)
      .then((response) => {
        setWarehouseName(response.data[0].warehouse_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDeleteClick() {
    const url = "http://localhost:8080/api/warehouses/" + id;
    axios
      .delete(url)
      .then((response) => {
        alert("Warehouse deleted succesfully");
        window.location.replace("/");
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
    <main className="warehouse__main">
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
            Delete Warehouse?
          </h1>
          <p className="warehouse__paragraph">
            Please confirm that you'd like to delete {warehouseName} from the
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
