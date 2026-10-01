import React from 'react';

const Account = ({ form, setForm, setCurrentStep }) => {

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  return (
    <div>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>

      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </label>

      <div>
        <button type="button" onClick={() => setCurrentStep(0)}>
          Back
        </button>

        <button type="button" onClick={() => setCurrentStep(2)}>
          Next
        </button>
      </div>

    </div>
  );
};

export default Account;