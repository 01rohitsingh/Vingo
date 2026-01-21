import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";
  const [showPassword, setshowPassword] = useState(false)
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{ backgroundColor: bgColor }}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`} style={{ border: `1px solod ${borderColor}` }}>
        <h1 className={`text-3xl font-bold mb-2`} style={{ color: primaryColor }}>Vingo</h1>
        <p className='text-gray-600 mb-8'>Create your account to get started with delicious food deliveries</p>

        {/* fullname */}
        <div className='mb-4'>
          <label htmlFor='fullname' className='block text-gray-700 font-medium mb-1'>Full Name</label>
          <input type='text' className='w-full border rounded-lg px-3 focus:outline-none  focus:border-orange-500' placeholder='Enter your Full Name' style={{ border: `1px solod ${borderColor}` }} />
        </div>

        {/* Email */}
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email</label>
          <input type='email' className='w-full border rounded-lg px-3 focus:outline-none  focus:border-orange-500' placeholder='Enter your Email' style={{ border: `1px solod ${borderColor}` }} />
        </div>

        {/* Mobile */}
        <div className='mb-4'>
          <label htmlFor='Mobile' className='block text-gray-700 font-medium mb-1'>Mobile</label>
          <input type='Mobile' className='w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter your Mobile Number' style={{ border: `1px solod ${borderColor}` }} />
        </div>

        {/* Password */}
        <div className='mb-4'>
          <label htmlFor='Password' className='block text-gray-700 font-medium mb-1'>Password</label>
          <div className='relative'>
            <input type={`${showPassword?"text" :"password"}`}className='w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter your Mobile Number' style={{ border: `1px solod ${borderColor}` }} />

            <button className='absolute right-3 top-[5px] cursor-pointer text-gray-500'
            onClick={()=>setshowPassword(prev=>!prev)} >{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
          </div>
        </div>


      </div>
    </div >
  )
}

export default SignUp