import React from "react";
import arrow from "../../assets/images/arrow_back-24px.svg";
import "./AddInventory.scss";

function AddInventory() {
  return (
    <>
      <section className="add-inventory">
        <div className="add-inventory__h1-container">
          <img
            className="add-inventory__back-button"
            src={arrow}
            alt="back arrow"
          ></img>
          <h1 className="add-inventory__h1">Add New Inventory Item</h1>
        </div>
        <div className="divider"></div>
        <section className="item">
          <h2 className="item__h2">Item Details</h2>
          <form>
            <div className="item__input-container">
              <label>Item Name</label>
              <input id="text-area" type="text" placeholder="Item Name"></input>
            </div>
            <div className="item__input-container">
              <label className="">Description</label>
              <input type="text" placeholder="Item Name"></input>
            </div>
            <div className="item__input-container">
              <label for="pet-select">Choose a pet:</label>
              <select name="pets">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
          </form>
        </section>
        <div className="divider"></div>
        <section className="item">
          <h2 className="item__h2">Item Availability</h2>
          <form>
            <label>Status</label>

            <div className="radio-container">
              <div className="radio-item">
                <input
                  name="status"
                  type="radio"
                  value="In Stock"
                  className="radio"
                ></input>

                <label>In stock</label>
              </div>
              <div className="radio-item">
                <input
                  name="status"
                  type="radio"
                  value="Out of Stock"
                  className="radio"
                ></input>

                <label>Out of stock</label>
              </div>
            </div>

            <div className="item__input-container">
              <label>Description</label>
              <textarea placeholder="Please enter a brief item Description"></textarea>
            </div>
            <div className="item__input-container">
              <label>Quanity</label>
              <input type="form" placeholder="0"></input>
            </div>
            <div className="item__input-container">
              <label for="pet-select">Choose a pet:</label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default AddInventory;
