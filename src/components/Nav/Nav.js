import { ReactComponent as InStockLogo } from "../../assets/images/InStock-Logo.svg";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [warehousePage, setWarehousePage] = useState(true);
  function handleClick() {
    setWarehousePage(!warehousePage);
    setInventoryPage(!inventoryPage);
  }

  const [inventoryPage, setInventoryPage] = useState(false);
  function Click() {
    setInventoryPage(!inventoryPage);
    setWarehousePage(!warehousePage);
  }

  return (
    <>
      <nav className="nav">
        <div className="nav__img-container">
        <Link
            to="/"
          ><InStockLogo className="nav__logo" /></Link>
        </div>
        <div className="nav__link-container">
          <Link
            onClick={handleClick}
            to="/"
            className={`nav__link ${warehousePage ? `nav--selected` : null} `}
          >
            <p>Warehouses</p>
          </Link>

          <Link
            onClick={Click}
            to="/inventory"
            className={`nav__link ${
              inventoryPage ? `nav--selected` : null
            } nav__link--padding`}
          >
            <p>Inventory</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
