import React from "react";
import "./Warehouseinventorylist.scss";
import chevron from "../../assets/images/chevron_right-24px.svg";
import deleteoutline from "../../assets/images/delete_outline-24px.svg";
import edit from "../../assets/images/edit-24px.svg";

function Warehouseinventorylist() {
  return (
    <section className="inventory">
      <div className="inventory__item-container">
        <div className="inventory__item-section">
          <h4 className="inventory__item-heading">INVENTORY ITEM</h4>
          <h3 className="inventory__item-subheading--indigo">Television</h3>
          <img src={chevron} alt="chevron icon" />
        </div>
        <div className="inventory__item-container">
          <h4 className="inventory__item-heading">CATEGORY</h4>
          <h3 className="inventory__item-subheading">Electronics</h3>
        </div>
        <div className="inventory__item-container-2">
          <h4 className="inventory__item-heading">STATUS</h4>
          <h4 className="inventory__item-subheading--green">IN STOCK</h4>
        </div>
        <div className="inventory__item-container-2">
          <h4 className="inventory__item-heading">QTY</h4>
          <p className="inventory__item-subheading">500</p>
        </div>
        <div className="inventory__item-container-2">
          <h4 className="inventory__item-heading">WAREHOUSE</h4>
          <p className="inventory__item-subheading">Manhattan</p>
        </div>
        <div className="icon__container">
          <img
            className="icon__container-delete"
            src={deleteoutline}
            alt="delete icon"
          />
          <img className="icon__container-edit" src={edit} alt="edit icon" />
        </div>
      </div>
    </section>
  );
}

export default Warehouseinventorylist;
