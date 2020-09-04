import React, {useState} from 'react';
import './hooks-form.css'

export default function Form() {

  //STATE
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

  //EVENT HANDLERS
    const handleFirstNameInputChange = (e) => {
        e.persist();
        setValues((values) => ({
          ...values,
          firstName: e.target.value,
        }));
    };

    const handleLastNameInputChange = (e) => {
        e.persist();
        setValues((values) => ({
          ...values,
          lastName: e.target.value,
        }));
    };

    const handleEmailInputChange = (e) => {
        e.persist();
        setValues((values) => ({
          ...values,
          email: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.firstName && values.lastName && values.email) {
          setValid(true);
        }
        setSubmitted(true);
    }


    return (
        <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid && <div class="success-message">Success! Thank you for registering</div>}
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
          />
          {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
          />
          {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
          />
          {submitted && !values.email && <span id="email-error">Please enter an email address</span>}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    )
}