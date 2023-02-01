import React, { useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../Context/StateContext'

import SingleCart from '../components/SingleCart';

const Cart = () => {
    const {state:{cart},dispatch} = useStateContext();
    const [total,setTotal] = useState(0);
    
    const navigate = useNavigate();

    const checkoutHandler = () => {
      dispatch({type:'CART_EMPTY'});
      navigate('/success')
    }
    const addPrice = (price) =>{
      return setTotal(total + price)
    }
    const minusPrice = (price) =>{
        return setTotal(total - price)
    }
    
    useEffect(()=>{
      setTotal(cart.reduce((i,c)=> i + c.price,0));
    },[])
    
  return (
    <>
    {
      cart.length > 0 ? (
        <div className=' grid grid-cols-4 gap-10 container mx-auto p-4'>
          <div className='col-span-full md:col-span-3 flex flex-col gap-5'>
            {cart?.map(item=>{
            return <SingleCart key={item.id} item={item} addPrice={addPrice} minusPrice={minusPrice}/>
            })}
          </div>
          <div className='col-span-full md:col-span-1 overflow-hidden'>
            <div className=' bg-gray-100 p-12 mb-4 rounded-md shadow-lg'>
              <p className=' text-primary font-semibold text-3xl mb-6'>Total Price - ${total.toFixed(2)}</p>
              <button onClick={checkoutHandler} className=' bg-accent mr-3 w-40 py-2 rounded-md font-bold tracking-wide text-secondary  transition hover:ring-2 hover:bg-secondary hover:text-primary'>Checkout</button>
            </div>
            <button onClick={()=>dispatch({type:'CART_EMPTY'})} className='bg-red-500 mr-3 w-40 py-2 rounded-md font-bold text-secondary transition hover:bg-red-800 hover:text-secondary'>Cart Empty</button>
          </div>
        </div>
        ) : 
        <div className=' flex justify-center animate__animated animate__jackInTheBox'>
          <div className=' bg-info p-12 md:p-24 rounded-lg flex flex-col items-center'>
            <h1 className=' text-2xl md:text-4xl font-bold text-primary mb-8 '>Your Cart is Empty!</h1>
            <button onClick={()=>navigate('/')} className=' bg-primary mr-3 w-40 py-2 rounded-md font-bold tracking-wide text-secondary  transition hover:ring-2 hover:bg-secondary hover:text-primary'>Go Shopping</button>
          </div>
        </div>
    }
    </>
  )
}

export default Cart