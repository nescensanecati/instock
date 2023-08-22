import "./WarehouseList.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../assets/images/search-24px.svg";
import Delete from "../../assets/images/delete_outline-24px.svg";
import Edit from "../../assets/images/edit-24px.svg";
import Arrow from "../../assets/images/chevron_right-24px.svg";
import Sort from "../../assets/images/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseList() {
  const url = `http://localhost:8080/api/warehouses`;
  const warehousesUrl = `${url}`;

  const [contentItems, setContentItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getAndDisplayWarehouses();
  }, []);

  const getAndDisplayWarehouses = () => {
    axios
      .get(warehousesUrl)
      .then((result) => {
        setContentItems(result.data);
      })
      .catch((error) => {
        console.log("got error calling API", error);
      });
  };

  const handleWarehousesClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="warehouses">
      <div className="warehouses-content">
        <div className="warehouses-content__nav">
          <h1 className="warehouses-content__nav--title">Warehouses</h1>
          <div className="warehouses-content__nav--search">
            <input
              type="search"
              value="Search..."
              className="warehouses-content__nav--search-field"
              readOnly
            />{" "}
            <img src={Search} alt="search" />
          </div>
          <Link
                    className="warehouses-content__links"
                    to={`/addwarehouse`}
                  >
          <button className="warehouses-content__nav--button">
            {" "}
            + Add New Warehouse{" "}
          </button>
          </Link>
        </div>

        <div className="warehouses-content__titles">
          <p className="warehouses-content__titles--warehouse">
            WAREHOUSE <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouses-content__titles--address">
            ADDRESS <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouses-content__titles--contact-name">
            CONTACT NAME <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouses-content__titles--contact-info">
            CONTACT INFORMATION <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouses-content__titles--actions">ACTIONS</p>
        </div>

        <div className="warehouses-content__list">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`warehouses-content__list-warehouse ${
                selectedItem === index
                  ? "warehouses-content__list-warehouse--selected"
                  : ""
              }`}
              onClick={() => handleWarehousesClick(index)}
            >
              <div className="warehouses-content__list-warehouse--rows">
                <div className="warehouses-content__list-warehouse--columns">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>WAREHOUSE</p>
                  </div>
                  <Link
                    className="warehouses-content__links"
                    to={`/warehousedetails/${item.id}`}
                  >
                  <div className="warehouses-content__list-warehouse--name">
                    <p className="warehouses-content__list-warehouse--name-layout">
                      {item.warehouse_name}
                      <img src={Arrow} alt="arrow" />
                    </p>
                  </div>
                  </Link>
                </div>
                <div className="warehouses-content__list-warehouse--columns-2">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>CONTACT NAME</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--contact-name">
                    <p>{item.contact_name}</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--address-tablet">
                    <p>
                      {item.address}, {item.city}, {item.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="warehouses-content__list-warehouse--rows">
                <div className="warehouses-content__list-warehouse--columns">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>ADDRESS</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--address">
                    <p>
                      {item.address}, {item.city}, {item.country}
                    </p>
                  </div>
                  <div className="warehouses-content__list-warehouse--contact-name-tablet">
                    <p>{item.contact_name}</p>
                  </div>
                </div>
                <div className="warehouses-content__list-warehouse--columns">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>CONTACT INFORMATION</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--contact-info">
                    <p>
                      {item.contact_phone} {item.contact_email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="warehouses-content__list-warehouse--actions">
              <Link
                    className="warehouses-content__links"
                    to={`/deletewarehouse/${item.id}`}
                  ><img src={Delete} alt="delete" /></Link>
                 <Link
                    className="warehouses-content__links"
                    to={`/editwarehouse/${item.id}`}
                  ><img src={Edit} alt="edit" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WarehouseList;
