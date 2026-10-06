// import React from 'react';

const Personal = ({ form, setForm,setCurrentStep }) => {

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  return (
    <div>
        <label>Name :</label>
      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />
      <br />
        <label>Email :</label>
        
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
        <label>Age :</label>
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
      />
      <br/>
        <label>Gender :</label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={form.gender === "male"}
        onChange={handleChange}
      />
      Male
        
      <input
        type="radio"
        name="gender"
        value="female"
        checked={form.gender === "female"}
        onChange={handleChange}
      />
      Female

      <input
        type="radio"
        name="gender"
        value="other"
        checked={form.gender === "other"}
        onChange={handleChange}
      />
      Other
      <br/>
        <label>Phone :</label>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
        <div>
            <button onClick={()=>setCurrentStep(1)}>Next</button>
        </div>
    </div>
  );
};

export default Personal;