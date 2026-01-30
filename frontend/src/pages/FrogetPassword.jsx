import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router-dom';

function FrogetPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword,setNewPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const navigate = useNavigate();
  return (

    <div className='w-full min-h-screen flex items-center justify-around p-4 bg-[#fff9f6] '>
      <div className='w-full bg-white max-w-md border rounded-xl shadow-lg p-8'>
        <div className='flex items-center gap-4 mb-4'>
          <IoIosArrowRoundBack size={30} className='text-[#ff4d2d] cursor-pointer '
            onClick={() => navigate("/signin")} />
          <h1 className='text-2xl font-bold text-center text-[#ff4d2d]'>Forget Password</h1>
        </div>

        {step == 1
          &&
          <div>
            <div className='mb-6'>
              <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email</label>
              <input type='text' className='border-[1px]  border-gray-200 w-full rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <button className='w-full  text-white  bg-[#ff4d2d] rounded-lg font-semibold py-1 transition duration-200 cursor-pointer hover:bg-[#e64323]' >Send OTP</button >
          </div>
        }

        {step == 2
          &&
          <div>
            <div className='mb-6'>
              <label htmlFor='otp' className='block text-gray-700 font-medium mb-1'>OTP</label>
              <input type='text' className='border-[1px]  border-gray-200 w-full rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter Your OTP' onChange={(e) => setOtp(e.target.value)} value={otp} />
            </div>
            <button className='w-full  text-white  bg-[#ff4d2d] rounded-lg font-semibold py-1 transition duration-200 cursor-pointer hover:bg-[#e64323]' >Verify</button >
          </div>
        }

        {step == 3
          &&
          <div>
            <div className='mb-6'>
              <label htmlFor='New_Password' className='block text-gray-700 font-medium mb-1'>New Password</label>
              <input type='text' className='border-[1px]  border-gray-200 w-full rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter Your New Password' onChange={(e) =>setNewPassword(e.target.value)} value={newPassword} />
            </div>
            <div className='mb-6'>
              <label htmlFor='confirm_Password' className='block text-gray-700 font-medium mb-1'>Confirm Password</label>
              <input type='text' className='border-[1px]  border-gray-200 w-full rounded-lg px-3 focus:outline-none focus:border-orange-500' placeholder='Enter Your Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
            <button className='w-full  text-white  bg-[#ff4d2d] rounded-lg font-semibold py-1 transition duration-200 cursor-pointer hover:bg-[#e64323]' >Reset Password</button >


          </div>
        }


      </div>


    </div >
  )
}

export default FrogetPassword


