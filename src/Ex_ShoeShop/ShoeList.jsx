import React from 'react'
import ShoeItem from './ShoeItem'

export default function ShoeList({products , onViewDetail}) {
  return (
    <div className='row'>
        {products.map((product)=>{
            return <div key={product.id} className='col-4'>
                <ShoeItem product={product} onViewDetail={onViewDetail}/>
            </div>
        })}
    </div>
  )
}
