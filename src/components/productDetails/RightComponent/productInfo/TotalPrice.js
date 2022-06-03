import React from 'react'
import ProductPrice from '../../../common/productList/singleProduct/ProductPrice'

export default function TotalPrice({ qty, unitPrice }) {
    return (
        <div style={{ float: 'right', margin: '40px 0', fontSize: '22px' }}>
            
            <ProductPrice ProductPrice={qty * unitPrice} />
        </div>
    )
}
