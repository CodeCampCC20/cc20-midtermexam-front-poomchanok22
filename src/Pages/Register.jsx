import React from "react";
import HeadForm from "../components/HeadForm";
import BtnForm from "../components/BtnForm";
import InputFomr from "../components/InputFomr";
import { NavLink, useNavigate } from "react-router";

function Register() {
      const navigate = useNavigate()

      const handleLogin = () => {
        navigate('/')
      }
  return (


    <div>
      <main className="px-10 py-8">
        <form className="w-2/5 mx-auto space-y-6">
          <HeadForm text="Register" />
          <InputFomr text="Username" />
          <InputFomr text="Password" />
          <BtnForm onClick={handleLogin} children="Submit" />
        </form>
      </main>
    </div>
  );
}

export default Register;
