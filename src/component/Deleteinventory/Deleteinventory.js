import React from "react";
import "./Deleteinventory.scss";
import close from "../../assets/images/close-24px.svg";
function Deleteinventory() {
  return (
    <main className="instock-main">
      <div className="instock">
        <div className="instock__container">
          <div className="instock__icon-container">
            <img className="instock__icon" src={close} alt="close-icon" />
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
          <button className="instock__button instock__button--1">Cancel</button>
          <button className="instock__button instock__button--2">Delete</button>
        </div>
      </div>
    </main>
  );
}

export default Deleteinventory;
