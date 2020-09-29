import React, { useState } from "react";

const Form = () => {
  const [txtUsername, setTxtUsername] = useState("");
  const [age, setAge] = useState(0);
  const [formErrors, setFormErrors] = useState({ textUsername: "", age: "" });
  const [fieldValidity, setFieldValidity] = useState({
    textUsername: false,
    age: false
  });
  const [successMessage, setSuccessMessage] = useState("");
  // const [formValid, setformValid] = useState(false);

  return (
    <div style={{ width: 400, margin: "10px auto" }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSuccessMessage(
            `Form submitted with username ${txtUsername} and age ${age}`
          );
        }}
      >
        <div className="form-group">
          <label htmlFor="txtUsername">User name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Please enter your username"
            name="txtUsername"
            value={txtUsername}
            onChange={(event) => {
              setTxtUsername(event.target.value);
              if (event.target.value.length < 5) {
                setFormErrors((formErrors) => ({
                  ...formErrors,
                  textUsername: "Please enter atleat 5 characters"
                }));
                setFieldValidity((fieldValidity) => ({
                  ...fieldValidity,
                  textUsername: false
                }));
              } else {
                setFormErrors((formErrors) => ({
                  ...formErrors,
                  textUsername: ""
                }));
                setFieldValidity((fieldValidity) => ({
                  ...fieldValidity,
                  textUsername: true
                }));
              }
              // const form = !(fieldValidity.textUsername && fieldValidity.age);
              // setformValid({ form });
              // console.log(form);
            }}
          />
          <div style={{ color: "red" }} id="errorMsg">
            {formErrors.textUsername}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="number"
            name="age"
            placeholder="18"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
              if (event.target.value < 18) {
                setFormErrors((formErrors) => ({
                  ...formErrors,
                  age: "Cannot be less than 18"
                }));
                setFieldValidity((fieldValidity) => ({
                  ...fieldValidity,
                  age: false
                }));
              } else {
                setFormErrors((formErrors) => ({ ...formErrors, age: "" }));
                setFieldValidity((fieldValidity) => ({
                  ...fieldValidity,
                  age: true
                }));
              }
              // const form = !(fieldValidity.textUsername && fieldValidity.age);
              // setformValid({ form });
              // console.log(form);
            }}
          />
          <div style={{ color: "red" }} id="errorMsg">
            {formErrors.age}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!(fieldValidity.textUsername && fieldValidity.age)}
        >
          Submit
        </button>
      </form>
      <div style={{ color: "green" }} id="successMessage">
        {successMessage}
      </div>
    </div>
  );
};

export default Form;
