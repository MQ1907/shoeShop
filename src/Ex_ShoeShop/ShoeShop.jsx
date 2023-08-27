import React, { useState } from 'react'
import ShoeList from './ShoeList'
import data from './data.json'
import ShoeDetail from './ShoeDetail'

export default function ShoeShop() {
  const [isOpenModal , setOpenModal] = useState(false)
  const [productDetail,setProductDetail] = useState({})

  const handleViewDetail =(id)=>{
    setOpenModal (true)
    let newProductDetail = data.filter((item)=>{
      return item.id === id 
     })
     setProductDetail(...newProductDetail)

    }

    


    const handleCloseModal = ()=>{
      console.log("Hàm đã chạy")
     setOpenModal(false)
    }
   
    return (
    <div className='container'>
        <h1 className='text-center text-primary'>Shoe Shop</h1>

        

        <ShoeList products={data} onViewDetail={handleViewDetail} />
        {isOpenModal && <ShoeDetail  product={productDetail} onCloseModal={handleCloseModal} /> }
    </div>
  )
}
