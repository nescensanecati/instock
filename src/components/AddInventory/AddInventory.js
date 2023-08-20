import React from "react";
import arrow from "../../assets/images/arrow_back-24px.svg";
import "./AddInventory.scss";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import error from "../../assets/images/error-24px.svg";

function AddInventory() {
  // const [idFromParams] = useParams();
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [category, setCategory] = useState("");
  const [itemStatus, setItemStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const [errors, setErrors] = useState({});

  const hasError = (field) => {
    return errors[field] !== undefined;
  };

  const isFormValid = () => {
    const newErrors = {};
    if (!itemName) newErrors.itemName = "This field is required";
    if (!itemDescription) newErrors.itemDescription = "This field is required";
    if (!category) newErrors.category = "This field is required";
    if (!itemStatus) newErrors.itemStatus = "This field is required";
    if (itemStatus === "In Stock" && isNaN(quantity)) {
      newErrors.quantity = "This field is required";
    }
    if (!warehouse) newErrors.warehouse = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const inventoryData = {
        itemName,
        itemDescription,
        category,
        itemStatus,
        quantity,
        warehouse,
      };

      axios
        .post(`http://localhost:8080/api/inventories/`, inventoryData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          //log errors that occurr during data submision
          console.log(err);
        });
      alert("Updated new inventory successfully!");
    } else {
      alert(
        "Failed to update the new inventory, there was at least one error in the form."
      );
    }
  };

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
        <main className="add-inventory-main">
          <section className="item">
            <h2 className="item__h2">Item Details</h2>
            <form noValidate onSubmit={handleSubmit}>
              <div className="item__input-container">
                <label htmlFor="name">Item Name</label>
                <input
                  name="itemName"
                  type="text"
                  id="name"
                  placeholder="Item Name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className={`add-item__input ${
                    hasError("itemName") ? "add-item__input--error" : ""
                  }`}
                ></input>
                {hasError("itemName") && (
                  <span className="add-item__error-message">
                    {errors["itemName"]}
                  </span>
                )}
              </div>
              <div className="item__input-container">
                <label htmlFor="description">Description</label>
                <textarea
                  name="itemDescription"
                  type="text"
                  id="description"
                  placeholder="Please enter a brief item Description..."
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  className={`add-item__input ${
                    hasError("itemDescription") ? "add-item__input--error" : ""
                  }`}
                ></textarea>
                {hasError("itemDescription") && (
                  <span className="add-item__error-message">
                    {errors["itemDescription"]}
                  </span>
                )}
              </div>
              <div className="item__input-container">
                <label htmlFor="select">Category</label>
                <select
                  name="category"
                  id="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`add-item__input ${
                    hasError("category") ? "add-item__input--error" : ""
                  }`}
                >
                  <option value="">Please select</option>
                  <option value="electronics">Electronics</option>
                  <option value="gear">Gear</option>
                  <option value="apparel">Apparel</option>
                  <option value="accessories">Accessories</option>
                  <option value="health">Health</option>
                </select>
                {hasError("category") && (
                  <span className="add-item__error-message">
                    {errors["category"]}
                  </span>
                )}
              </div>
            </form>
          </section>
          <div className="divider" id="vertical"></div>
          <section className="item">
            <h2 className="item__h2">Item Availability</h2>
            <form>
              <label>Status</label>

              <div className="radio-container">
                <div className="radio-item">
                  <input
                    name="itemStatus"
                    type="radio"
                    value="In Stock"
                    checked={itemStatus === "In Stock"}
                    onChange={(e) => setItemStatus(e.target.value)}
                    className={`add-itemStatus__input ${
                      hasError("itemStatus") ? "add-item__input--error" : ""
                    }`}
                  ></input>

                  <label>In stock</label>
                </div>
                <div className="radio-item">
                  <input
                    name="itemStatus"
                    type="radio"
                    value="Out of Stock"
                    checked={itemStatus === "Out of Stock"}
                    onChange={(e) => setItemStatus(e.target.value)}
                    className={`add-itemStatus__input ${
                      hasError("category") ? "add-item__input--error" : ""
                    }`}
                  ></input>

                  <label>Out of stock</label>
                </div>
              </div>
              {hasError("itemStatus") && (
                <span className="add-item__error-message">
                  {errors["itemStatus"]}
                </span>
              )}

              {itemStatus !== "Out of Stock" && (
                <div className="item__input-container">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    placeholder="0"
                    onChange={(e) => setQuantity(e.target.value)}
                    className={`add-warehouse__input ${
                      hasError("quantity") ? "add-item__input--error" : ""
                    }`}
                  ></input>
                  {hasError("quantity") && (
                    <span className="add-item__error-message">
                      {errors["quantity"]}
                    </span>
                  )}
                </div>
              )}

              <div className="item__input-container">
                <label htmlFor="warehouse">Warehouse:</label>
                <select
                  id="warehouse"
                  name="warehouse"
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                  className={`add-item__input ${
                    hasError("warehouse") ? "add-item__input--error" : ""
                  }`}
                >
                  <option value="">Please select</option>
                  <option value="manhattan">Manhattan</option>
                  <option value="washington">Washington</option>
                  <option value="Jersey">Jersey</option>
                  <option value="san fran">San Fran</option>
                  <option value="santa monica">Santa Monica</option>
                  <option value="seattle">Seattle</option>
                  <option value="miami">Miami</option>
                </select>
                {hasError("warehouse") && (
                  <span className="add-item__error-message">
                    {errors["warehouse"]}
                  </span>
                )}
              </div>
            </form>
            <div className="item__input-button-container">
              <button>Cancel</button>
              <button onClick={handleSubmit}>Add Item</button>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default AddInventory;
