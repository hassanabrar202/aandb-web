import React, {useContext, useState} from 'react';
import { Input } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../utils/ContextProvider"; // Importing useNavigate for navigation

const Signup = () => {
  const navigate = useNavigate(); // Initializing useNavigate
  const { registerUser } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // You should implement your registerUser function here to send the form data to the backend for registration
      // Replace this with your actual implementation
      console.log('Form data:', formData);
      registerUser(formData)
      // After successful registration, you can navigate the user to the login page or any other page
      navigate('/login');
    } catch (error) {
      console.error('Signup Error:', error);
      // Handle signup error
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // You should implement your Google sign-up functionality here
      // Replace this with your actual implementation

      // After successful Google sign-up, you can navigate the user to the login page or any other page
      navigate('/login');
    } catch (error) {
      console.error('Google Signup Error:', error);
      // Handle Google signup error
    }
  };

  return (
      <div className="h-screen bg-white flex flex-col justify-center items-center mx-auto">
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full lg:p-12">
              <div className="flex items-center xl:p-10">
                <form
                    onSubmit={handleSignup}
                    className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                >
                  <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign Up</h3>
                  <p className="mb-4 text-grey-700">Create your account</p>
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
                  <Input
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="mb-5"
                  />
                  <Input
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="mb-5"
                  />
                  <Input
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                      className="mb-5"
                  />
                  <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mb-5"
                  />
                  <Input
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="mb-5"
                  />
                  <button
                      type="submit"
                      className="w-full border px-6 py-5 mb-5 text-sm font-bold leading-none transition duration-300 md:w-96 rounded-2xl"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm leading-relaxed text-grey-900">
                    Already Registered ?{' '}
                    <a href="/login" className="font-bold text-grey-700">
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
