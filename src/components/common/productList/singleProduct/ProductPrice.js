import React from 'react'

export default function ProductPrice({ ProductPrice }) {
    return (
        <div style={{fontWeight: 'bold', color: '#9C27B0'}}>
            {ProductPrice
                ? "Rs: " +
                ProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") +
                ".00": ""
             }
        </div>
    )
}
