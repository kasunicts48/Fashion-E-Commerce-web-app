import { Typography } from '@material-ui/core'
import React from 'react'

export default function ProductName({ ProductName, ProductType }) {
    return (
        <div>
            <Typography>{ProductName+ " " + ProductType}</Typography>
        </div>
    )
}
