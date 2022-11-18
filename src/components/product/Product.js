import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {ProductStyled} from './ProductStyled'
function ProductDetails() {
  const params = useParams()
	const category  = params.category;
  const product_id = params.product_id;
  const [productDetails, setProductDetails] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8081/api/vi/product/${category}/${product_id}`)
    .then((res)=>{setProductDetails(res.data); console.log(res.data)})
    .catch((err)=>console.log(err))
  },[category,product_id])
  
  return (
    <ProductStyled >
      <h3>Go Back</h3>
      <div className='product-details'>
        <section>
          {productDetails}
        </section>
      </div>
    </ProductStyled>
  )
}

export default ProductDetails