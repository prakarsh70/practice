import React, { useState } from "react";

const Form = () => {
  const [txtUsername, setTxtUsername] = useState("");
  const [age, setAge] = useState();
  const [formErrors, setFormErrors] = useState({ textUsername: "", age: "" });
  const [fieldValidity, setFieldValidity] = useState({
    textUsername: true,
    age: true
  });
  const [formValid, setformValid] = useState(true);

  return (
    <div style={{ width: 400, margin: "10px auto" }}>
      <form>
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
                  textUsername: true
                }));
                const form = fieldValidity.txtUsername && fieldValidity.age;
                setformValid({ form });
              } else {
                setFormErrors((formErrors) => ({
                  ...formErrors,
                  textUsername: ""
                }));
                setFieldValidity((fieldValidity) => ({
                  ...fieldValidity,
                  textUsername: false
                }));
                const form = fieldValidity.txtUsername && fieldValidity.age;
                setformValid({ form });
              }
            }}
          />
          <div style={{ color: "red" }} id="errorMsg">
            {formErrors.textUsername}
          </div>
        </div>
        <div className="form-group">
          <label for="age">Age</label>
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
                  age: true
                }));
                const form = fieldValidity.txtUsername && fieldValidity.age;
                setformValid({ form });
              } else {
                setFormErrors((formErrors) => ({ ...formErrors, age: "" }));
                setFieldValidity((fieldValidity) => ({
                  ...fieldValidity,
                  age: false
                }));
                const form = fieldValidity.txtUsername && fieldValidity.age;
                setformValid({ form });
              }
            }}
          />
          <div style={{ color: "red" }} id="errorMsg">
            {formErrors.age}
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={formValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
