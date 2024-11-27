import React from 'react'

import "./product.css"


const Product = ({result}) => {
  return (
    <div>
<section className="card-container">
{result}
</section>

    </div>
  )
}

export default Product