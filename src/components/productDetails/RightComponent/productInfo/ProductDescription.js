import React from 'react'
import { Typography } from '@material-ui/core'

export default function ProductDescription({ productDis}) {
    return (
        <div>
            <Typography>{productDis}</Typography>
        </div>
    )
}
