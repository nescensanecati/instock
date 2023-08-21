import React from "react";
import axios from "axios";
import "./WarehouseDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import backLogo from "../../assets/images/arrow_back-24px.svg";
import editButton from "../../assets/images/edit-24px-white.svg";
import WarehouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";

function WarehouseDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const warehouseURL = "http://localhost:8080/api/warehouses/" + id;
  useEffect(() => {
    axios
      .get(warehouseURL)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("axios call failed", error);
      });
  }, []);

  if (details.length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
    let inStock;
    details[0].quantity != 0 ? (inStock = true) : (inStock = false);
    return (
      <>
        <section id="warehouse-details">
          <section className="warehouse-details__h1-container">
            <div className="warehouse-details__back-button">
              <img src={backLogo} alt="back button" />
              <h1 className="warehouse-details__h1">
                {details[0].warehouse_name}
              </h1>
            </div>
            <div className="warehouse-details__edit-button">
              <img src={editButton} alt="button used to edit one item" />
            </div>
          </section>
          <div className="line"></div>
          <section className="warehouse-details__details-container">
            <div
              className="warehouse-details__address-container "
              id="container-border"
            >
              <h4 className="warehouse-details__h4">WAREHOUSE ADDRESS:</h4>
              <div className="warehouse-details__p-container">
                <p className="warehouse-details__p2" id="smaller-width">
                  {details[0].address}
                </p>
                <div className="p-details-div">
                  <p className="warehouse-details__p2"> {details[0].city}</p>
                  <p className="warehouse-details__p2">{details[0].state}</p>
                </div>
              </div>
            </div>
            <div className="warehouse-details__contact-container">
              <div id="contact-name">
                <div className="warehouse-details__contact-details-container">
                  <h4 className="warehouse-details__h4">CONTACT NAME:</h4>
                </div>
                <div>
                  <p className="warehouse-details__p2">
                    {details[0].contact_name}
                  </p>
                  <p className="warehouse-details__p2">
                    {details[0].contact_position}
                  </p>
                </div>
              </div>
              <div>
                <div className="warehouse-details__contact-details-container">
                  <h4 className="warehouse-details__h4">
                    CONTACT INFORMATION:
                  </h4>
                </div>
                <div>
                  <p className="warehouse-details__p2">
                    {details[0].contact_phone}{" "}
                  </p>
                  <p className="warehouse-details__p2">
                    {details[0].contact_email}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <WarehouseInventoryList />
      </>
    );
  }
}

export default WarehouseDetails;
