import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ImageSwiper from "../../components/productDetails/LeftComponent/ImageSwiper";
import ProductInfo from "../../components/productDetails/RightComponent/ProductInfo";
import CommonLayout from "../common/CommonLayout";

export default function ProductDetails() {
  const productReducer = useSelector((state) => state.productReducer);

  const { selectedProduct } = productReducer;

  return (
    <div>
      <CommonLayout>
        <div style={{ marginBottom: "100px" }}>
          <Grid
            container
            spacing={3}
            style={{ backgroundColor: "#F0CFFF", borderRadius: "20px" }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <ImageSwiper images={selectedProduct.images} />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <ProductInfo product={selectedProduct} />
            </Grid>
          </Grid>
        </div>
      </CommonLayout>
    </div>
  );
}
