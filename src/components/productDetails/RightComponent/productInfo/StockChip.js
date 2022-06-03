import React from 'react'
import { Chip } from '@material-ui/core'

export default function StockChip({ productQty }) {
    return (
        <div>
            <Chip
                    label={productQty > 0 ? "In Stock" : "Out of Stock"}
                    style={{
                        background: productQty ? '#64DD17': "#F44336",
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                />
        </div>
    )
}
