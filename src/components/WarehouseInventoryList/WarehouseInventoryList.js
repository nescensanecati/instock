import "./WarehouseInventoryList.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Delete from "../../assets/images/delete_outline-24px.svg";
import Edit from "../../assets/images/edit-24px.svg";
import Arrow from "../../assets/images/chevron_right-24px.svg";
import Sort from "../../assets/images/sort-24px.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function WarehouseInventoryList() {
  const { idFromParams } = useParams();

  const [warehouseInventoriesItems, setWarehouseInventoriesItems] = useState(
    []
  );

  let defaultWarehouseId = null;

  if (warehouseInventoriesItems.length > 0) {
    defaultWarehouseId = warehouseInventoriesItems[0].id;
  }

  const warehouseIdToDisplay =
    idFromParams !== undefined ? idFromParams : defaultWarehouseId;

  const filteredWarehouses = warehouseInventoriesItems.filter((warehouse) => {
    return warehouse.id !== warehouseIdToDisplay;
  });
  const warehouseinventoriesUrl = `http://localhost:8080/api/warehouses/${warehouseIdToDisplay}/inventories `;

  const [
    selectedWarehouseInventoriesItem,
    setSelectedWarehouseInventoriesItem,
  ] = useState(null);

  useEffect(() => {
    getAndDisplayWarehouseInventories();
  }, [idFromParams]);

  const getAndDisplayWarehouseInventories = () => {
    axios
      .get(warehouseinventoriesUrl)
      .then((result) => {
        setWarehouseInventoriesItems(result.data);
      })
      .catch((error) => {
        console.log("got error calling API", error);
      });
  };

  const handleWarehouseInventoriesClick = (index) => {
    setSelectedWarehouseInventoriesItem(index);
  };

  return (
    <div className="warehouse-inventories">
      <div className="warehouse-inventories-content">
        <div className="warehouse-inventories-content__titles">
          <p className="warehouse-inventories-content__titles--inventory-item">
            INVENTORY ITEM <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouse-inventories-content__titles--category">
            CATEGORY <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouse-inventories-content__titles--status">
            STATUS <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouse-inventories-content__titles--quantity">
            QUANTITY <img src={Sort} alt="sort arrows" />{" "}
          </p>
          <p className="warehouse-inventories-content__titles--actions">
            ACTIONS
          </p>
        </div>

        <div className="warehouse-inventories-content__list">
          {warehouseInventoriesItems.map((item, index) => (
            <div
              key={index}
              className={`warehouse-inventories-content__list-inventory ${
                selectedWarehouseInventoriesItem === index
                  ? "warehouse-inventories-content__list-inventory--selected"
                  : ""
              }`}
              onClick={() => handleWarehouseInventoriesClick(index)}
            >
              <div className="warehouse-inventories-content__list-inventory--rows">
                <div className="warehouse-inventories-content__list-inventory--columns">
                  <div className="warehouse-inventories-content__list-inventory--title">
                    <p>INVENTORY ITEM</p>
                  </div>
                  <Link
                    className="warehouse-inventories__links"
                    to={`/itemdetails/${item.id}`}
                    key={item.id}
                  >
                    <div className="warehouse-inventories-content__list-inventory--item-name">
                      <p className="warehouse-inventories-content__list-inventory--item-name-layout">
                        {item.item_name}
                        <img src={Arrow} alt="arrow" />
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="warehouse-inventories-content__list-inventory--columns-2">
                  <div className="warehouse-inventories-content__list-inventory--title">
                    <p>STATUS</p>
                  </div>
                  <div
                    className={`warehouse-inventories-content__list-inventory--status ${
                      item.status === "In Stock" ? "in-stock" : "out-of-stock"
                    }`}
                  >
                    <p>{item.status}</p>
                  </div>
                  <div className="warehouse-inventories-content__list-inventory--category-tablet">
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>

              <div className="warehouse-inventories-content__list-inventory--rows">
                <div className="warehouse-inventories-content__list-inventory--columns">
                  <div className="warehouse-inventories-content__list-inventory--title">
                    <p>CATEGORY</p>
                  </div>
                  <div className="warehouse-inventories-content__list-inventory--category">
                    <p>{item.category}</p>
                  </div>
                  <div
                    className={`warehouse-inventories-content__list-inventory--status-tablet ${
                      item.status === "In Stock" ? "in-stock" : "out-of-stock"
                    }`}
                  >
                    <p>{item.status}</p>
                  </div>
                </div>
                <div className="warehouse-inventories-content__list-inventory--columns-tablet">
                  <div className="warehouse-inventories-content__list-inventory--title">
                    <p>QTY</p>
                  </div>
                  <div className="warehouse-inventories-content__list-inventory--quantity">
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>

              <div className="warehouse-inventories-content__list-inventory--actions">
                <Link to={`/deleteinventory/${item.id}`} key={item.id}>
                  {" "}
                  <img src={Delete} alt="delete" />
                </Link>{" "}
                <img src={Edit} alt="edit" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WarehouseInventoryList;
