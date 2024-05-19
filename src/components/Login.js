import React, { useContext, useState } from 'react'
import { AuthContext } from '../utils/ContextProvider'

const Login = () => {
  const { loginUser} = useContext(AuthContext)
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await loginUser(credentials)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
      <div className='h-screen bg-white flex flex-col justify-center items-center mx-auto'>
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full lg:p-12">
              <div className="flex items-center xl:p-10">
                <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                  <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                  <p className="mb-4 text-grey-700">Enter your email and password</p>
                  <a className="flex items-center justify-center border w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                    <img className="h-5 mr-2"
                         src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                         alt=""/>
                      Sign in with Google
                  </a>
                  <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-grey-500 grow"/>
                      <p className="mx-4 text-grey-600">or</p>
                      <hr className="h-0 border-b border-solid border-grey-500 grow"/>
                  </div>
                  <label for="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
                  <input id="email" name="email" type="email" placeholder="mail@loopple.com"
                         className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                         value={credentials.email}
                         onChange={handleChange}
                  />
                  <label for="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                  <input id="password"  name="password" type="password" placeholder="Enter a password"
                         className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                         value={credentials.password}
                         onChange={handleChange}
                  />
                  <div className="flex flex-row justify-between mb-8">
                    <a className="mr-4 text-sm font-medium text-purple-blue-500">Forget
                      password?</a>
                  </div>
                  <button
                      onClick={handleLogin}
                      className="w-full border px-6 py-5 mb-5 text-sm font-bold leading-none transition duration-300 md:w-96 rounded-2xl ">Sign
                    In
                  </button>
                  <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="/signup"
                                                                                          className="font-bold text-grey-700">Create
                    an Account</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>

</div>
)
}

export default Login
