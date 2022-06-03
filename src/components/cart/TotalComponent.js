import React from 'react'
import ProductPrice from '../common/productList/singleProduct/ProductPrice';

export default function TotalComponent({cart}) {

    const [total,setTotal] = React.useState(0);

    React.useEffect(() => {
        //console.log(cart)

        let total = 0;
        cart.forEach(element => {
            total += element.product.price * element.quantity
        });
        setTotal(total)
    },[cart])
  return (
    <div style={{display: 'flex',fontSize: '20px',fontFamily: 'poppins',float: 'right',padding: '10px'}}>
        <p style={{color: '#757575'}}>{total && "Total Price:"}</p>{" "}
            <ProductPrice ProductPrice={total}  />
    </div>
  )
}
