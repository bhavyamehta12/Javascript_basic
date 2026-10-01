import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    conpassword: "",
    age: "",
    phone: "",
    gender: "",
    country: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  }

  function validateForm() {
    const newErrors = {};

    // Full name
    if (form.fullname.trim() === "") {
      newErrors.fullname = "Full name is required";
    } else if (form.fullname.trim().length < 3) {
      newErrors.fullname = "Full name must be at least 3 characters";
    }

    // Email
    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    // Password
    if (form.password === "") {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(form.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    if (form.conpassword === "") {
      newErrors.conpassword = "Please confirm your password";
    } else if (form.conpassword !== form.password) {
      newErrors.conpassword = "Passwords do not match";
    }

    // Age
    if (form.age === "") {
      newErrors.age = "Age is required";
    } else if (Number(form.age) < 18 || Number(form.age) > 100) {
      newErrors.age = "Age must be between 18 and 100";
    }

    // Phone
    if (form.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits";
    }

    // Gender
    if (form.gender === "") {
      newErrors.gender = "Please select your gender";
    }

    // Country
    if (form.country === "") {
      newErrors.country = "Please select your country";
    }

    // Terms
    if (!form.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSuccess("");

    const validationErrors = validateForm();

    setErrors(validationErrors);

    // Stop if validation failed
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Loading simulation
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setSuccess("Registration successful!");

      console.log("Submitted data:", {
        fullname: form.fullname,
        email: form.email,
        age: form.age,
        phone: form.phone,
        gender: form.gender,
        country: form.country,
      });
    }, 1500);
  }

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <br />

          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          {errors.fullname && <p>{errors.fullname}</p>}
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email</label>
          <br />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password</label>
          <br />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          {errors.password && <p>{errors.password}</p>}
        </div>

        <br />

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <br />

          <input
            type="password"
            name="conpassword"
            value={form.conpassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />

          {errors.conpassword && <p>{errors.conpassword}</p>}
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Age</label>
          <br />

          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />

          {errors.age && <p>{errors.age}</p>}
        </div>

        <br />

        {/* Phone */}
        <div>
          <label>Phone Number</label>
          <br />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10 digit phone number"
          />

          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <br />

        {/* Gender */}
        <div>
          <label>Gender</label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={form.gender === "other"}
              onChange={handleChange}
            />
            Other
          </label>

          {errors.gender && <p>{errors.gender}</p>}
        </div>

        <br />

        {/* Country */}
        <div>
          <label>Country</label>
          <br />

          <select
            name="country"
            value={form.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="New Zealand">New Zealand</option>
          </select>

          {errors.country && <p>{errors.country}</p>}
        </div>

        <br />

        {/* Terms */}
        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            I accept the Terms & Conditions
          </label>

          {errors.terms && <p>{errors.terms}</p>}
        </div>

        <br />

        {/* Submit */}
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Success */}
        {success && <p>{success}</p>}
      </form>
    </div>
  );
};

export default App;