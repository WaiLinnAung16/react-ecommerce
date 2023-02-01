import React from 'react'
import { useStateContext } from '../Context/StateContext'
import Spinner from '../components/spinner/Spinner'
import Card from './Card';

const Products = () => {
  const {state:{products}} = useStateContext(); 
  return (
    <div className=' flex flex-wrap gap-8 justify-center container mx-auto pb-10'>
        {products.length > 0 ?  products?.map((product)=><Card key={product.id} product={product}/>) : <Spinner/>}
    </div>
  )
}

export default Products