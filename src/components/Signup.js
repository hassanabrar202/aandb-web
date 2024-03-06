
import React, { useState, useContext } from 'react';
import {AuthContext} from "../utils/ContextProvider";

const Signup = () => {
  const { registerUser } = useContext(AuthContext);
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

  const handleSignup = () => {
    registerUser(formData)
  };

  return (
      <div className='bg-white flex flex-col justify-center items-center pl-14 pr-16 py-12 max-md:px-5'>
        <div className='w-full max-w-[1236px] mt-36 mb-24 max-md:max-w-full max-md:my-10'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0'>
              <div className='flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0'>
                         <img
                               loading='lazy'
                               src='https://img.freepik.com/free-photo/vibrant-gold-blue-macaw-perched-nature-generated-by-ai_188544-15513.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais'
                               className='aspect-[1.03] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10'
                             />
                           </div>
            </div>
            <div className='flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0'>
              <div className='items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10'>
                <div className='text-zinc-900 text-4xl font-bold leading-10 max-md:max-w-full'>
                  Sign Up
                </div>
                <div className='text-black text-base leading-10 mt-6 max-md:max-w-full'>
                  Enter your email or phone No
                </div>
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5'
                    placeholder='Enter email address'
                />
                <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
                  Enter your Password
                </div>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5'
                    placeholder='Password'
                />
                <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
                  Enter your First Name
                </div>
                <input
                    type='text'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    className='text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5'
                    placeholder='Enter your First Name'
                />
                <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
                  Enter your Last Name
                </div>
                <input
                    type='text'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    className='text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5'
                    placeholder='Enter your Last Name'
                />
                <div className='text-black text-base leading-10 mt-4 max-md:max-w-full'>
                  Enter your Username
                </div>
                <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    className='text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5'
                    placeholder='Enter your Username'
                />
                <button
                    onClick={handleSignup}
                    className='text-neutral-50 text-2xl font-bold leading-10 whitespace-nowrap justify-center items-center bg-sky-600 mt-6 px-16 py-2.5 rounded-lg max-md:max-w-full max-md:px-5'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
