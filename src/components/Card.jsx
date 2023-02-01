import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'

const Card = ({product}) => {
  const {dispatch} = useStateContext();
  return (
    <div className=' w-80 h-[360px] p-4 relative shadow flex flex-col rounded transition cursor-pointer hover:shadow-xl hover:shadow-info hover:scale-105'>
        <div className=' self-center'>
            <img src={product.image} alt="" className=' h-40 '/>
        </div>
        <h1 className=' font-bold text-lg my-3 text-primary'>{product.title.substring(0,25)}...</h1>
        <div className=' flex items-center space-x-2'>
            <FaStar className=' text-danger'/>
            <p className=' font-semibold text-accent'>({product.rating.rate})</p>
        </div>
        <h1 className=' text-xl font-bold text-primary my-3'>$ {product.price}</h1>
        <div className='absolute bottom-3'>
            <button 
                onClick={()=>dispatch({type:"ADD_TO_CART",payload: product})} 
                className=' bg-info mr-3 py-2 px-4 rounded-md font-bold text-primary transition hover:bg-primary hover:text-secondary'
            >
              Add To Cart
            </button>
            <Link to={`/detail/${product.id}`}>
            <button className=' bg-danger py-2 px-4 rounded-md font-semibold transition hover:bg-secondary hover:ring-2 hover:ring-danger'>Detail</button>
            </Link>
        </div>
    </div>
  )
}

export default Card