import React from 'react'

const Address = ({form,setForm,setCurrentStep}) => {
    function handleChange(e){
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
  return (
    <div>
      <label>Country</label>
          <br />

          <select
            name="country"
            value={form.country}
            onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="New Zealand">New Zealand</option>
          </select>
          <label>State</label>
            <br />
            <select name='state' value={form.state} onChange={handleChange}>
                <option value="">Select State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Dehli">Dehli</option>
                <option value="San Fransisco">San Fransisco</option>
                <option value="Rajastan">Rajastan</option>
                <option value="NewYork">NewYork</option>
            </select>
            <label>City</label>
            <br />
            <input type='text' name="city" value={form.city} onChange={handleChange}/>
            <br/>
            <label>Pincode</label>
            <input type='number' name='pincode' value={form.pincode} onChange={handleChange}/>
            <div>
                <button type='button' onClick={()=>setCurrentStep(1)}>Back</button>
                <button type='button' onClick={()=>setCurrentStep(3)}>Next</button>
            </div>
    </div>
  )
}

export default Address
// country: "",
//     state: "",
//     city: "",
//     pincode: ""