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

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const hasError = (field) => {
    return errors[field] !== undefined;
  };

  const isFormValid = () => {
    const newErrors = {};

    //Check if the fields are all filled
    if (!name) newErrors.name = "This field is required";
    if (!address) newErrors.address = "This field is required";
    if (!city) newErrors.city = "This field is required";
    if (!country) newErrors.country = "This field is required";
    if (!contact) newErrors.contact = "This field is required";
    if (!position) newErrors.position = "This field is required";
    if (!phoneNumber) newErrors.phoneNumber = "This field is required";
    if (!email) newErrors.email = "This field is required";

    setErrors(newErrors);
    console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(e);
      // Perform your data submission - sending to database
      console.log("Data to submit:", {
        name,
        address,
        city,
        country,
        contact,
        position,
        phoneNumber,
        email,
      });
      alert("Signed up successfully");
    } else {
      alert("Failed to sign up, you have errors in your form");
    }
  };

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
          <form onSubmit={handleSubmit} className="edit-warehouse__form">
            <div className="edit-warehouse__details">
              <h2 className="edit-warehouse__subheading">Warehouse Details</h2>
              <label htmlFor="name" className="edit-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Washington"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("name") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("name") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>

              <label htmlFor="address" className="edit-warehouse__label">
                Street Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="33 Pearl Street SW"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("address") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("address") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>

              <label htmlFor="city" className="edit-warehouse__label">
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Washington"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("city") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("city") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>

              <label htmlFor="country" className="edit-warehouse__label">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="USA"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("country") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("country") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>
            </div>
            <div className="edit-warehouse__details edit-warehouse__details--border ">
              <h2 className="edit-warehouse__subheading">Contact Details</h2>
              <label htmlFor="contact" className="edit-warehouse__label">
                Contact Name
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  value={contact}
                  placeholder="Graeme Lyon"
                  onChange={(e) => setContact(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("contact") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("contact") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>

              <label htmlFor="position" className="edit-warehouse__label">
                Position
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Warehouse Manager"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("position") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("position") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>

              <label htmlFor="phoneNumber" className="edit-warehouse__label">
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (647) 504-0911"
                  className={`edit-warehouse__input ${
                    hasError("phoneNumber")
                      ? "edit-warehouse__input--error"
                      : ""
                  }`}
                ></input>{" "}
                {hasError("phoneNumber") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>

              <label htmlFor="email" className="edit-warehouse__label">
                Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="glyon@instock.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`edit-warehouse__input ${
                    hasError("email") ? "edit-warehouse__input--error" : ""
                  }`}
                ></input>{" "}
                {hasError("email") && (
                  <p className="edit-warehouse__error-message">
                    This field is required
                  </p>
                )}
              </label>
            </div>
          </form>
          <div className="edit-warehouse__buttons">
            <button className="edit-warehouse__button-cancel">Cancel</button>
            <button
              className="edit-warehouse__button-save"
              onClick={handleSubmit}
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
