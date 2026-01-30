import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from '../App';

function SignIn() {
  const primaryColor = "#ff4d2d";
  // const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";
  const [showPassword, setshowPassword] = useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignIn = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/auth/signin`, {
        email, password
      }, { withCredentials: true })
      console.log(result)
    }
    catch (error) {
      console.log(Object);
    }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{ backgroundColor: bgColor }}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`} style={{ border: `1px solod ${borderColor}` }}>
        <h1 className={`text-3xl font-bold mb-2`} style={{ color: primaryColor }}>Vingo</h1>
        <p className='text-gray-600 mb-8'>Sign In to your account to get started with delicious food deliveries</p>

        {/* Email */}
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email</label>
          <input type='email' className='w-full border rounded-lg px-3 focus:outline-none  focus:border-orange-500' placeholder='Enter your Email' style={{ border: `1px solod ${borderColor}` }} onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>


        {/* Password */}
        <div className='mb-4'>
          <label htmlFor='Password' className='block text-gray-700 font-medium mb-1'>Password</label>
          <div className='relative'>
            <input type={`${showPassword ? "text" : "password"}`} className='w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter your password' style={{ border: `1px solod ${borderColor}` }} onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className='absolute right-3 top-[5px] cursor-pointer text-gray-500'
              onClick={() => setshowPassword(prev => !prev)} >{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
          </div>
        </div>
        {/* Forget password */}
        <div className='font-medium text-right text-[#ff4d2d] cursor-pointer mb-4' onClick={() => navigate("/forget-password")}>Forget password</div>
        <button className={`w-full font-semibold py-2 transition duration-200  rounded-lg bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleSignIn} >Sign In</button>
        <button className={`w-full mt-4 py-2 gap-2 flex items-center justify-center rounded-lg cursor-pointer px-4 text-black border  border-gray-400 hover:bg-gray-200 transition duration-200 `} ><FcGoogle size={20} /><span>Sign in with Google</span></button>
        <p className='text-center mt-6 cursor-pointer' onClick={() => navigate('#forget password')}>want to create a New Account ? <span className='text-[#e64323]'>Sign up</span></p>
      </div>
    </div >
  )
}
export default SignIn