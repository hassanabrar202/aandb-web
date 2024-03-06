import React, { useState, useContext } from 'react'
import { AuthContext } from '../utils/ContextProvider'
import { Card, CardBody, CardHeader, Image, Input } from '@nextui-org/react'

const Signup = () => {
  const { registerUser } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    username: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSignup = () => {
    registerUser(formData)
  }

  return (
    <Card className='h-screen w-full'>
      <Card className='flex flex-row w-[768px] max-w-max mx-auto my-auto items-center justify-evenly'>
        {/*<Image*/}
        {/*  src='https://img.freepik.com/free-photo/vibrant-gold-blue-macaw-perched-nature-generated-by-ai_188544-15513.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais'*/}
        {/*  alt='imma bird'*/}
        {/*  className='hidden md:block'*/}
        {/*/>*/}
        <Card className='px-32 shadow-none lg:w-max'>
          <CardHeader>Signup</CardHeader>
          <CardBody>
            <Input
              label='Email'
              defaultValue='Enter your Email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter email address'
              required={true}
            />
            <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
              Enter your Password
            </div>
            <Input
              type='password'
              label='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              required={true}
            />
            <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
              Enter your First Name
            </div>
            <Input
              type='text'
              label='First Name'
              name='firstname'
              value={formData.firstname}
              onChange={handleChange}
              placeholder='Enter your First Name'
              required={true}
            />
            <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
              Enter your Last Name
            </div>
            <Input
              type='text'
              label='Last Name'
              name='lastname'
              value={formData.lastname}
              onChange={handleChange}
              placeholder='Enter your Last Name'
              required={true}
            />
            <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
              Enter your Username
            </div>
            <Input
              type='text'
              label='Username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter your Username'
              required={true}
            />
            <button
              onClick={handleSignup}
              className='text-neutral-50 text-2xl font-bold leading-10 whitespace-nowrap justify-center items-center bg-sky-600 mt-6 px-16 py-2.5 rounded-lg max-md:max-w-full max-md:px-5'
            >
              Sign Up
            </button>
          </CardBody>
        </Card>
      </Card>
    </Card>
  )
}

export default Signup
