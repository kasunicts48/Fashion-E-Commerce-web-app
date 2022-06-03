import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import StockChip from './productInfo/StockChip'
import ProductPrice from '../../../components/common/productList/singleProduct/ProductPrice'
import ProductName from './productInfo/ProductName'
import ProductDescription from './productInfo/ProductDescription'
import ProductSizeList from './productInfo/ProductSizeList'
import ProductQuantity from './productInfo/ProductQuantity'
import TotalPrice from './productInfo/TotalPrice'
import AddToCart from './productInfo/AddToCart'


const useStyle = makeStyles((theme) => ({
    root:{
        fontFamily: 'poppins',
        padding: '10px'
    },
    productName:{
        display: 'inline-block', 
        float: 'left',
    },
    stockChip: {
        display: 'inline-block', 
        float: 'right', 
        marginTop: '4px'
    },
    productDis: {
        marginTop: '20px'
    }
}));

//  const product = 
//     {
//         productName: "Product 3",
//         type: "tshirt",
//         color: ["black","blue"],
//         size: ["S", "M"],
//         price: 10000,
//         description: "This is the product description",
//         quantity: 100,
//         images: [7, 8],
//         sku: "sk001"
//       };
 

export default function ProductInfo({product}) {

    const [qty, setQty] = React.useState(1);
    const [size, setSize] = React.useState();
    
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <div className={classes.productName}>
                <ProductName productName={product.productName}/>
            </div>
            <div className={classes.stockChip}>
                <StockChip productQty={product.quantity} />
            </div>
            <br />
            <br />
            <div style={{fontSize: '30px'}}>
             <ProductPrice ProductPrice={product.price} />
            </div>
            <div className={classes.productDis}>
                <ProductDescription productDis={product.description} />
            </div>
            <br />
            <div>
                <ProductSizeList sizes={product.size} setSize = {setSize} />
            </div>
            <hr />
            <Grid container>
                <Grid item xs={12} lg={6}>
                    <ProductQuantity qty={qty} setQty={setQty} />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TotalPrice qty={qty} unitPrice={product.price} />
                </Grid>
                <Grid item xs={12}>
                    <AddToCart product={product} qty={qty} size={size} />
                </Grid>
            </Grid>
        </div>
    )
}

