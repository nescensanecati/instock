import "./EditWarehouse.scss";
import { useState } from "react";
import arrowBack from "../../assets/images/arrow_back-24px.svg";

function EditWarehouse() {
  // All form fields need to have validation both on
  // Front-End and Back-End. All fields are required
  // (non-empty). For Phone Number and Email fields validate
  //  correct phone number and email. Front-End validation
  //  needs to be custom and cannot use default HTML5 form
  //  validation.
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <main className="edit-warehouse">
        <section className="edit-warehouse__page">
          <div className="edit-warehouse__header">
            <img
              className="edit-warehouse__img"
              src={arrowBack}
              alt="Arrow back"
            />
            <h1 className="edit-warehouse__title">Edit Warehouse</h1>
          </div>
          <form className="edit-warehouse__form">
            <div className="edit-warehouse__details">
              <h2 className="edit-warehouse__subheading">Warehouse Details</h2>
              <label htmlFor="name" className="edit-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="edit-warehouse__input"
                ></input>
              </label>

              <label htmlFor="address" className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="edit-warehouse__input"
                ></input>
              </label>

              <label htmlFor="city" className="edit-warehouse__label">
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="edit-warehouse__input"
                ></input>
              </label>

              <label htmlFor="country" className="edit-warehouse__label">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="edit-warehouse__input"
                ></input>
              </label>
            </div>
            <div className="edit-warehouse__details">
              <h2 className="edit-warehouse__subheading">Contact Details</h2>
              <label htmlFor="contactName" className="edit-warehouse__label">
                Contact Name
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  className="edit-warehouse__input"
                ></input>
              </label>

              <label htmlFor="position" className="edit-warehouse__label">
                Position
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="edit-warehouse__input"
                ></input>
              </label>

              <label htmlFor="phoneNumber" className="edit-warehouse__label">
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="edit-warehouse__input"
                ></input>
              </label>

              <label htmlFor="email" className="edit-warehouse__label">
                Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="edit-warehouse__input"
                ></input>
              </label>
            </div>
          </form>
          <div className="edit-warehouse__buttons">
            <button className="edit-warehouse__button-cancel">Cancel</button>
            <button
              className="edit-warehouse__button-save"
              // onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditWarehouse;
