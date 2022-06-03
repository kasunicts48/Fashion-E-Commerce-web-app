import { Grid } from '@material-ui/core'
import React from 'react'
import SingleSizeBlock from './sizeList/SingleSizeBlock';

const allsizes = ["XS", "S", "M", "L", "XL"];

export default function SizeList({ Productsizes }) {

    console.log(Productsizes.includes("s"))
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1}></Grid>
                
                {allsizes.map((val,key) => {
                    return(
                        <Grid key={key} item xs={2}>
                            <SingleSizeBlock
                            sizeValue={val}
                            flag={Productsizes.includes(val)}
                            />
                        </Grid>
                    )
                })}

           
            </Grid>
                <Grid item xs={1}></Grid>  
            
        </div>
    )
}
