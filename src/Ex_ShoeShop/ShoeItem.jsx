import React from 'react'

export default function ShoeItem({product , onViewDetail}) {
  return (
    <div className='card'>
        <img className='card-img' src={product.image} alt="" />
        <div className='card-body'>
           <h3 className='card-body'> {product.name}</h3>
            <p className='card-text'>{product.price}$</p>
            <button className='btn btn-dark '>Add to cart</button>
            <button className='btn btn-dark mx-2' onClick={()=>onViewDetail(product.id)}>Information</button>
        </div>

    </div>
    
  )
}
