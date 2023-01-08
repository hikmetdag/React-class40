import React from "react"

const Product = ({pro}) => {
  return (
    <div className='products'>{pro.map((product) => {
      return <div key={product.id} className="product">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
    </div>
    })}</div>
  )
}

export default Product