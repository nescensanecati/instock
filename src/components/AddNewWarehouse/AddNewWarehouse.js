import "./AddNewWarehouse.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/images/arrow_back-24px.svg";
import axios from "axios";

function AddNewWarehouse() {

  const [warehouse_name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contact_name, setContact] = useState("");
  const [contact_position, setPosition] = useState("");
  const [contact_phone, setPhoneNumber] = useState("");
  const [contact_email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexTel = /^\+\d{1,2}\s\(\d{3}\)\s\d{3}-\d{4}$/;

  //function that checks whether there is an error associated with a particular form field.
  const hasError = (field) => {
    return errors[field] !== undefined; //If it's not undefined it is because there is an error message that exists for that field and returns true
  };

  //function that validates the form input fields, returns true or false.
  const isFormValid = () => {
    const newErrors = {}; //empty object to store validation error messages for all the different form fields.

    //Check if the fields are all filled (non-empty)
    if (!warehouse_name) newErrors.warehouse_name = "This field is required";
    if (!address) newErrors.address = "This field is required";
    if (!city) newErrors.city = "This field is required";
    if (!country) newErrors.country = "This field is required";
    if (!contact_name) newErrors.contact_name = "This field is required";
    if (!contact_position)
      newErrors.contact_position = "This field is required";
    if (!contact_phone) newErrors.contact_phone = "This field is required";
    if (!contact_email) newErrors.contact_email = "This field is required";

    //  For Phone Number and Email fields validate correct phone number and email. Front-End validation needs to be custom and cannot use default HTML5 form validation.
    if (!regexTel.test(contact_phone))
      newErrors.contact_phone = "Telephone format is invalid";
    if (!regexEmail.test(contact_email))
      newErrors.contact_email = "Email format is invalid";

    setErrors(newErrors); //updates the errors state with the new generated error messages.

    // Return true if there are no error messages, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  //handles form submission, validates the form data, sends it to the server for updating, and provides
  //user feedback based on the outcome of the submission and validation process.
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default form submission behavior

    if (isFormValid()) {
      // Prepare data submission - sending to database (server)
      const warehouseData = {
        warehouse_name,
        address,
        city,
        country,
        contact_name,
        contact_position,
        contact_phone,
        contact_email,
      };
      //Send the data to the server using the axios library's PUT method to update data on the server
      axios
        .post(`http://localhost:8080/api/warehouses`, warehouseData)
        .then((response) => {
          alert("Updated new warehouse details successfully!");
          setName("");
          setAddress("");
          setCity("");
          setCountry("");
          setContact("");
          setPosition("");
          setPhoneNumber("");
          setEmail("");
          window.location.replace("/");
        })
        .catch((err) => {
          //log errors that occurr during data submision
          console.log(err);
        });
    } else {
      alert(
        "Failed to update the new warehouse details, there was at least one error in the form."
      );
    }
  };

  // function to handle the Cancel button click, takes the user to warehouse list page
  const handleCancel = () => {
    // refresh the form by resetting all the state values to empty
    setName("");
    setAddress("");
    setCity("");
    setCountry("");
    setContact("");
    setPosition("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <>
      <main className="add-warehouse">
        <section className="add-warehouse__page">
          <div className="add-warehouse__header">
            <Link to="/">
              <img
                className="add-warehouse__img"
                src={arrowBack}
                alt="Arrow back"
              />
            </Link>
            <h1 className="add-warehouse__title">Add New Warehouse</h1>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="add-warehouse__form"
          >
            <div className="add-warehouse__details">
              <h2 className="add-warehouse__subheading">Warehouse Details</h2>
              <label htmlFor="name" className="add-warehouse__label">
                Warehouse Name
                <input
                  type="text"
                  name="warehouse_name"
                  id="name"
                  placeholder="Warehouse Name"
                  value={warehouse_name}
                  onChange={(e) => setName(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("warehouse_name")
                      ? "add-warehouse__input--error"
                      : ""
                  }`}
                />
                {hasError("warehouse_name") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>

              <label htmlFor="address" className="add-warehouse__label">
                Street Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Street Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("address") ? "add-warehouse__input--error" : ""
                  }`}
                />
                {hasError("address") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>

              <label htmlFor="city" className="add-warehouse__label">
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("city") ? "add-warehouse__input--error" : ""
                  }`}
                />
                {hasError("city") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>

              <label htmlFor="country" className="add-warehouse__label">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("country") ? "add-warehouse__input--error" : ""
                  }`}
                />
                {hasError("country") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>
            </div>
            <div className="add-warehouse__details add-warehouse__details--border ">
              <h2 className="add-warehouse__subheading">Contact Details</h2>
              <label htmlFor="contact" className="add-warehouse__label">
                Contact Name
                <input
                  type="text"
                  name="contact_name"
                  id="contact"
                  value={contact_name}
                  placeholder="Contact Name"
                  onChange={(e) => setContact(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("contact_name")
                      ? "add-warehouse__input--error"
                      : ""
                  }`}
                />
                {hasError("contact_name") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>

              <label htmlFor="position" className="add-warehouse__label">
                Position
                <input
                  type="text"
                  name="contact_position"
                  id="position"
                  placeholder="Position"
                  value={contact_position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("contact_position")
                      ? "add-warehouse__input--error"
                      : ""
                  }`}
                />
                {hasError("contact_position") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>

              <label htmlFor="contact_phone" className="add-warehouse__label">
                Phone Number
                <input
                  type="tel"
                  name="contact_phone"
                  id="contact_phone"
                  value={contact_phone}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className={`add-warehouse__input ${
                    hasError("contact_phone")
                      ? "add-warehouse__input--error"
                      : ""
                  }`}
                />
                {hasError("contact_phone") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>

              <label htmlFor="contact_email" className="add-warehouse__label">
                Email
                <input
                  type="email"
                  name="contact_email"
                  id="contact_email"
                  value={contact_email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`add-warehouse__input ${
                    hasError("contact_email")
                      ? "add-warehouse__input--error"
                      : ""
                  }`}
                />
                {hasError("contact_email") ? (
                  <span className="add-warehouse__error-message">
                    {`This field is required`}
                  </span>
                ) : (
                  <span></span>
                )}
              </label>
            </div>
          </form>
          <div className="add-warehouse__buttons">
            <Link to="/">
              <button
                className="add-warehouse__button-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </Link>
            <button
              className="add-warehouse__button-add"
              onClick={handleSubmit}
            >
              + Add Warehouse
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default AddNewWarehouse;
