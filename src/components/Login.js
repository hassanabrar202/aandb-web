import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/ContextProvider'
import { Button, Card, CardBody, Input } from '@nextui-org/react'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser, registerUser } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleLogin = async () => {
    try {
      const userData = await loginUser(credentials)
      console.log('User logged in:', userData)
      navigate('/chat')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className='h-screen bg-white flex flex-col justify-center items-center mx-auto'>
      <Card className=' md:w-[768px] max-w-max mx-auto items-center justify-evenly py-4'>
        <Card className='px-8 md:px-32 shadow-none lg:w-max'>
          <div className='py-8 font-bold text-4xl leading-3 text-center'>
            Login
          </div>
          <CardBody className='flex flex-col gap-4'>
            <Input
              label='Email'
              type='email'
              name='email'
              value={credentials.email}
              placeholder={'Enter email address'}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required={true}
              variant={'bordered'}
              isRequired={true}
            />
            <Input
              label='Password'
              type='password'
              name='Password'
              value={credentials.password}
              placeholder='Password'
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required={true}
              variant={'bordered'}
              isRequired={true}
            />
          </CardBody>
        </Card>
        <Button color='primary' variant='solid' onClick={handleLogin}>
          Log in
        </Button>
      </Card>
    </div>
  )
}

export default Login
