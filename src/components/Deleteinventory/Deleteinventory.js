
import "./Deleteinventory.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import close from "../../assets/images/close-24px.svg";
import { useState } from "react";


function Deleteinventory() {
  const { id } = useParams();
  const [inventoryName, setInventoryName] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/` + id)
      .then((response) => {
        setInventoryName(response.data[0].item_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDeleteClick() {
    const url = "http://localhost:8080/api/inventories/" + id;
    axios
      .delete(url)
      .then((response) => {
        alert("Inventory deleted succesfully");
        window.location.replace("/inventory");
      })
      .catch((error) => {
        console.log(error);
        alert("Inventories deletion failed", error);
      });
  }

  function handleCancelClick() {
    window.location.replace("/inventory");
  }

  return (
    <main className="instock-__main">
      <div className="instock">
        <div className="instock__container">
          <div className="instock__icon-container">
            <img className="instock__icon" src={close} alt="close-icon" />
          </div>
          <h1 className="instock__heading">
            Delete {inventoryName} inventory item?
          </h1>
          <p className="instock__paragraph">
            Please confirm that you'd like to delete {inventoryName} from the
            inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="instock__button-container">
          <button className="instock__button instock__button--1" onClick={handleCancelClick}>Cancel</button>
          <button className="instock__button instock__button--2" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </main>
  );
}

export default Deleteinventory;
