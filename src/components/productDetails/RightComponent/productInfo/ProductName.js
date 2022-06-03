import React from 'react'
import { Typography } from '@material-ui/core'

export default function ProductName({ productName }) {
    return (
        <div>
            <Typography variant="h4">{productName}</Typography>
        </div>
    )
}
