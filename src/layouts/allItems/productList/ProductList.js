import { Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../../../components/common/productList/SingleProduct";
import { fetchProductListBegin, fetchProductListSuccess } from "../../../store/actions/productActons";

// const product = [
//   {
//     productName: "Product 0",
//     type: "tshirt",
//     color: ["black", "blue"],
//     size: ["M", "L", "XL"],
//     price: 1500,
//     description: "This is the product description",
//     quantity: 100,
//     images: [1, 2],
//     sku: "sk001",
//   },
//   {
//     productName: "Product 1",
//     type: "tshirt",
//     color: ["black", "blue"],
//     size: ["M", "L", "XL"],
//     price: 4500,
//     description: "This is the product description",
//     quantity: 100,
//     images: [3, 4],
//     sku: "sk001",
//   },
//   {
//     productName: "Product 2",
//     type: "tshirt",
//     color: ["black", "blue"],
//     size: ["M", "XL"],
//     price: 6500,
//     description: "This is the product description",
//     quantity: 100,
//     images: [5, 6],
//     sku: "sk001",
//   },
//   {
//     productName: "Product 3",
//     type: "tshirt",
//     color: ["black", "blue"],
//     size: ["S", "M"],
//     price: 10000,
//     description: "This is the product description",
//     quantity: 100,
//     images: [7, 8],
//     sku: "sk001",
//   },
// ];

export default function ProductList() {
  const dispatch = useDispatch();

  const {loading,allProducts} = useSelector((state) => state.productReducer)
  console.log(loading)
  console.log(allProducts)

  React.useEffect(() => {
    dispatch(fetchProductListBegin())
    setTimeout(() => {
      dispatch(fetchProductListSuccess());
    },1000)
  }, []);
  return (
    <div style={{marginBottom: '100px'}}>
      <Grid container spacing={2}>
        {loading && <p>Loading</p>}
        {allProducts.length > 0 && allProducts.map((val, key) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
              <SingleProduct product={val} />
            </Grid>
          );
        })}

        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                  <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <SingleProduct />
                </Grid> */}
      </Grid>
    </div>
  );
}
