import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core"
import { useSelector } from "react-redux";
import CartItem from "./body/CartItem";
import { Link } from "react-router-dom";
import TotalComponent from "../../components/cart/TotalComponent";

const useStyles = makeStyles(() => ({
  root: {
    background: "#F0CFFF",
    marginTop: "5%",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "100px",
  },
}));

export default function Body() {
  const classes = useStyles();

  const cart = useSelector((state) => state.cartReducer.cart);
  const sizeOfCart = cart.length;
  //console.log(cart);
  return <div className={classes.root}>
      <Grid container spacing={3}>
            <Grid item xs={sizeOfCart < 1 ? 12 : 4} md={6}>
                {sizeOfCart === 0 && "Your Cart is empty"}{" "}
                <Link to="/all-items">{sizeOfCart === 0 && "Continue Shopping"}</Link>
            </Grid>
            <Grid item xs={6} md={6}>
                {sizeOfCart > 0 && <TotalComponent cart={cart} />}
            </Grid>
            
            <br />
            <CartItem itemList = {cart} />
      </Grid>
  </div>;
}
