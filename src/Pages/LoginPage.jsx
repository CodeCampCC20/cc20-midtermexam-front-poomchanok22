import React from 'react'
import HeadForm from '../components/HeadForm'
import BtnForm from '../components/BtnForm'
import InputFomr from '../components/InputFomr'
import { useNavigate } from 'react-router'

function LoginPage() {
const navigate = useNavigate()

const handleLogin = () => {
  navigate('/todopage')
}
const handleRegister = () => {
  navigate('/register')
}

  return (
   <main className='px-10 py-8'>
    <form className="w-2/5 mx-auto space-y-6">
    <HeadForm  text="Login"/>
    <InputFomr text="Username" />
    <InputFomr text="Password"/>
    <BtnForm onClick={handleLogin} children="Submit"/>
    <BtnForm onClick={handleRegister} children="Register"/>



    </form>
   </main>
  )
}

export default LoginPage
