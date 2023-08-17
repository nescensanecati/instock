import "./WarehouseList.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../assets/images/search-24px.svg";
import Delete from "../../assets/images/delete_outline-24px.svg";
import Edit from "../../assets/images/edit-24px.svg";
import Arrow from "../../assets/images/chevron_right-24px.svg";

function WarehouseList() {
  const url = `https://project-1-api.herokuapp.com/`;
  const apiKey = `8bca0229-fc27-4f65-8f5c-ccc07db8a3ff`;
  const showsUrl = `${url}showdates?api_key=${apiKey}`;

  const [contentItems, setContentItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getAndDisplayShows();
  }, []);

  const getAndDisplayShows = () => {
    console.log(showsUrl);
    axios
      .get(showsUrl)
      .then((result) => {
        const contentItems = result.data;
        console.log("got shows", contentItems);
        setContentItems(contentItems);
      })
      .catch((error) => {
        console.log("got error calling API", error);
      });
  };

  const handleShowClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="warehouses">
      <div className="warehouses-content">
        <div className="warehouses-content__nav">
          <h2 className="warehouses-content__nav--title">Warehouses</h2>
          <div className="warehouses-content__nav--search">
            <input
              type="search"
              value="Search..."
              className="warehouses-content__nav--search-field"
            />{" "}
            <img src={Search} alt="search" />
          </div>
          <button className="warehouses-content__nav--button">
            {" "}
            + Add New Warehouse{" "}
          </button>
        </div>

        <div className="warehouses-content__list">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`warehouses-content__list-warehouse ${
                selectedItem === index ? "selected" : ""
              }`}
              onClick={() => handleShowClick(index)}
            >
              <div className="warehouses-content__list-warehouse--rows">
                <div className="warehouses-content__list-warehouse--columns">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>WAREHOUSE</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--name">
                    <p className="warehouses-content__list-warehouse--name-layout">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "2-digit",
                        year: "numeric",
                        day: "2-digit",
                      })}
                      <img src={Arrow} alt="arrow" />
                    </p>
                  </div>
                </div>
                <div className="warehouses-content__list-warehouse--columns-2">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>CONTACT NAME</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--info">
                    <p>{item.place}</p>
                  </div>
                </div>
              </div>

              <div className="warehouses-content__list-warehouse--rows">
                <div className="warehouses-content__list-warehouse--columns">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>ADDRESS</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--info">
                    <p>{item.location}</p>
                  </div>
                </div>
                <div className="warehouses-content__list-warehouse--columns">
                  <div className="warehouses-content__list-warehouse--title">
                    <p>CONTACT INFORMATION</p>
                  </div>
                  <div className="warehouses-content__list-warehouse--info">
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>

              <div className="warehouses-content__list-warehouse--rows">
                <img src={Delete} alt="delete" /> <img src={Edit} alt="edit" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WarehouseList;
