import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()
  return (
    <div className=' flex justify-center animate__animated animate__bounceInDown'>
        <div className=' bg-info p-4 mx-1 md:p-24 rounded-lg flex flex-col items-center'>
            <h1 className=' text-2xl md:text-4xl font-bold text-accent mb-8 tracking-wider'>Thanks For Purchasing</h1>
            <button onClick={()=>navigate('/')} className=' bg-primary mr-3 w-40 py-2 rounded-md font-bold tracking-wide text-secondary  transition hover:ring-2 hover:bg-secondary hover:text-primary'>Go Shopping</button>
        </div>
    </div>
  )
}

export default Success