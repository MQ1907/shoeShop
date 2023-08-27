import React from 'react'


export default function ShoeDetail({product , onCloseModal }) {
  return (
    <div>
    <div className="modal show " style={{ display: "block" }}  tabIndex={-1}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Thông tin sản phẩm</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onCloseModal} aria-label="Close" />
                </div>
                <div className="modal-body">
                    <table>
                        <thead>
                            <tr>
                                <th className='pe-5'>Name</th>
                                <th className='pe-5'>Image</th>
                                <th className='pe-5'>Description</th>
                                <th className='pe-5'>Quantity</th>
                                <th className='pe-5'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td><img src={product.image} className="w-100" alt="" /></td>
                            <td>{product.description}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}$</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-dark" onClick={onCloseModal} data-bs-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>
    <div className='modal-backdrop fade show'></div>
</div>
  )
}
