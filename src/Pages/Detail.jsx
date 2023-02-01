import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import { getData } from '../api';
import { useStateContext } from '../Context/StateContext';
import Spinner from '../components/spinner/Spinner';
const Detail = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [product,setProduct] = useState({});
  const [products,setProducts] = useState([]);
  const {dispatch} = useStateContext();

  const getProductDetail = async()=>{
    const data = await getData(`/products/${id}`);
    setProduct(data)
  }

  const getProductCategory = async()=>{
    const data = await getData(`/products/category/${product.category}`);
    const filterData = data?.filter((item)=> item.id !== product.id)
    setProducts(filterData)
  }
  useEffect(()=>{
    getProductDetail();
    getProductCategory();
  },[products,product])

  return (
    <>
    {products.length>0?<div className=' container mx-auto my-10'>
      <div className=' flex flex-col items-center md:flex-row md:justify-start  gap-7'>
        <div>
          <img src={product?.image} alt="" className=' h-96 border-2 border-info rounded-md p-5 transform transition hover:scale-105 hover:shadow-xl hover:shadow-info'/>
        </div>
        <div className=' flex flex-col justify-start gap-4 p-3'>
          <h1 className=' bg-info w-40 text-center rounded-full font-semibold text-primary'>{product?.category}</h1>
          <h1 className=' text-2xl font-bold'>{product?.title}</h1>
          <p className=' text-lg font-semibold tracking-tight text-gray-600 md:w-[800px]'>{product?.description}</p>
          <p className=' font-bold text-accent flex items-center gap-1'><FaStar/>({product?.rating?.rate})</p>
          <h2 className=' font-bold text-2xl'>${product?.price}</h2>
          <div className=''>
            <button onClick={()=>dispatch({type:"ADD_TO_CART",payload: product})}  className=' bg-info mb-3 md:mb-0 w-full md:mr-3 md:w-40 py-2 rounded-md font-bold text-primary transition hover:bg-primary hover:text-secondary'>Add To Cart</button>
            <button onClick={()=>navigate('/success')} className=' bg-accent md:mr-3 w-full md:w-40 py-2 rounded-md font-bold tracking-wide text-secondary  transition hover:ring-2 hover:bg-secondary hover:text-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className=' my-10'>
        <h1 className=' text-2xl font-bold mb-8 text-accent'>You may also like</h1>
        <div className=' flex flex-col justify-center items-center md:flex-row md:justify-start gap-10'>
          {products?.map((item)=>{
            return (
            <div key={item?.id} className=' shadow-lg p-4 rounded-md w-52 flex flex-col'>
              <img src={item?.image} alt="" className=' h-40 self-center'/>
              <div className=' flex justify-between items-center mt-4'>
                <p className=' font-bold text-lg'>${item?.price}</p>
                <p className=' text-normal font-semibold text-accent'>({item?.rating?.rate})</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>:
    <div className=' container mx-auto flex justify-center'>
      <Spinner/>
    </div>
    }
    </>
  )
}

export default Detail