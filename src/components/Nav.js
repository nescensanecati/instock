import { ReactComponent as InStockLogo } from "../assets/images/InStock-Logo.svg";

function Nav() {
  return (
    <>
      <section className="nav">
        <div className="nav__img-container">
          <InStockLogo />
          <h1>INSTOCK</h1>
        </div>
        <div className="nav__p-container">
          <p className="nav__p">Warehouses</p>
          <p className="nav__p">Inventory</p>
        </div>
      </section>
    </>
  );
}

export default Nav;
