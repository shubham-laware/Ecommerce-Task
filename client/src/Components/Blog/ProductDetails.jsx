import React from 'react';
import { useParams } from 'react-router-dom'
import data_product from './data.js'

const ProductDetails = (id) => {
  const proid=useParams();
  const proDetail=data_product.filter(item=>item.id == proid.id);
  const product=proDetail[0];

  console.log(product);
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light py-5 ">
       <div className="img-block">
        <img src={product.image} alt='' className='img-size'/>
        <h6 className='text-center p-1'>{product.release}</h6>
        <h4 className='text-center sub-title p-1'>{product.name}</h4>
        <h4 className='text-center sub-title-weight p-1'>{product.title}</h4>
       <div className="text-center">
       <button className='btn btn-light shop-btn'>SHOP NOW</button>
       </div>
       </div>
    </div>
  )
}

export default ProductDetails