import React from "react"

const Product = ({pro}) => {
  return (
    <div className='products'>{pro.map((product) => {
      return <div key={product.id} className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
    })}</div>
  )
}

export default Product