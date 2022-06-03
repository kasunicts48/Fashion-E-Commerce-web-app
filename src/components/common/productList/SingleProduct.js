import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { assignSelectedProduct } from "../../../store/actions/productActons";
import ProductImage from "./singleProduct/ProductImage";
import ProductName from "./singleProduct/ProductName";
import ProductPrice from "./singleProduct/ProductPrice";
import SizeList from "./singleProduct/SizeList";

export default function SingleProduct({ product }) {

  const dispatch = useDispatch()

  const handleProductSelect = () => {
    dispatch(assignSelectedProduct(product))
  }

  return (
    <Link
      to="/details"
      style={{ textDecoration: "none", color: "black", fontFamily: "poppins" }}
    >
      <div onClick={handleProductSelect}
        style={{
          height: "450px",
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "4px",
          width: "100%",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
        <ProductImage ProductImage={product.images} />
        <ProductName
          ProductName={product.productName}
          ProductType={product.type}
        />
        <ProductPrice ProductPrice={product.price} />
        <SizeList Productsizes={product.size} />
      </div>
    </Link>
  );
}
