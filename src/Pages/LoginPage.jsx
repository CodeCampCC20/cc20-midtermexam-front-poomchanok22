import React from 'react'
import HeadForm from '../components/HeadForm'
import BtnForm from '../components/BtnForm'
import InputFomr from '../components/InputFomr'
import { useNavigate } from 'react-router'

function LoginPage() {
const navigate = useNavigate()

  return (
   <main className='px-10 py-8'>
    <form action="w-2/5 mx-auto space-y-6">
    <HeadForm  text="Login"/>
    <InputFomr text="Username" />
    <InputFomr text="Password"/>
    <BtnForm children="Submit"/>
    <BtnForm children="Register"/>



    </form>
   </main>
  )
}

export default LoginPage
