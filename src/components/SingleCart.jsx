import React, { useState } from 'react'
import {RxCardStackMinus,RxCardStackPlus} from 'react-icons/rx'
import { useStateContext } from '../Context/StateContext';

const SingleCart = ({item,addPrice,minusPrice}) => {
    const {dispatch} = useStateContext()
    let [quantity,setQuantity] = useState(0);
    
    const add = (singleItem) => {
        let addCount = singleItem.qty++;
        setQuantity(addCount);
        addPrice(singleItem.price)
    }
    const minus = (singleItem) => {
        if(singleItem.qty > 1){
        let minusCount = singleItem.qty--;
        setQuantity(minusCount);
        minusPrice(singleItem.price)
        }
    }
    const reduce = (singleItem) => {
        minusPrice(singleItem.price * singleItem.qty)
    }
  return (
    <div className=' flex flex-col items-center md:flex-row gap-4 p-3 md:p-5 border rounded-md transition duration-200 hover:shadow-lg hover:scale-105' key={item.id}>
        <div className=' shrink-0 border-2 border-info rounded-md p-5 transform transition hover:scale-105 hover:shadow-xl hover:shadow-info'>
            <img src={item.image} alt="" className=' h-40'/>
        </div>
        <div className=' flex flex-col justify-center gap-4'>
            <h1 className=' text-xl font-bold'>{item.title}</h1>
            <p className=' w-full md:w-3/4 font-semibold text-slate-600'>{item.description}</p>
            <p className=' text-xl font-bold'>${parseFloat(item.price * item.qty).toFixed(2)}</p>
            
            <div className=' flex items-center gap-4 select-none'> 
                <RxCardStackPlus onClick={()=>add(item)} className=' text-2xl text-accent hover:scale-105 hover:text-blue-600'/>
                <p className=' font-bold'>{item.qty}</p>
                <RxCardStackMinus onClick={()=>minus(item)} className=' text-2xl text-red-400 hover:scale-105 hover:text-red-600'/>
            </div>
            <button onClick={()=>{
            dispatch({type:'REMOVE_ITEM',payload:item});
            reduce(item);
            }}
            className=' bg-danger mr-3 w-40 py-2 rounded-md font-bold text-primary transition hover:bg-red-500 hover:text-secondary'>Remove Item</button>
        </div>
    </div>
  )
}

export default SingleCart