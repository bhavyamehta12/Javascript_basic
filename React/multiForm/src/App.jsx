import { useState } from "react";
import Personal from "./Components/Personal";
import Account from "./Components/Account";

const App = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    city: "",
    pincode: ""
  });

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>

      {currentStep === 0 && (
        <Personal
          form={form}
          setForm={setForm}
          setCurrentStep={setCurrentStep}
        />
      )}

      {currentStep === 1 && (
        <Account
          form={form}
          setForm={setForm}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && (
        <Address
          form={form}
          setForm={setForm}
          setCurrentStep={setCurrentStep}
        />
      )}

    </div>
  );
};

export default App;