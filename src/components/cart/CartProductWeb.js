import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardItem: {
    padding: "10px",
    background: "white",
    marginBottom: "10px",
    width: "1250px",
    marginLeft: "20px",
  },
  name: {
    fontSize: "20px",
    fontFamily: "poppins",
    fontWeight: "500",
    marginBottom: "10px",
    marginTop: "30px",
  },
  description: { fontSize: "13px", fontFamily: "poppins", marginBottom: "5px" },
  size: {
    fontSize: "15px",
    fontFamily: "poppins",
    marginBottom: "5px",
    color: "#9E9E9E",
  },
  quantity: {
    fontSize: "15px",
    fontFamily: "poppins",
    marginBottom: "10px",
    color: "#9E9E9E",
  },
  productPrice: {
    fontSize: "20px",
    fontFamily: "poppins",
    marginBottom: "5px",
    color: "#9C27B0",
    fontWeight: "500",
  },
}));
export default function CartProductWeb({
  name,
  description,
  size,
  price,
  quantity,
  image,
  sku,
  type,
  handleRemove,
}) {
  const classes = useStyles();
  const productPrice = quantity * price;
  return (
    <div className={classes.cardItem}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div>
            <CardMedia
              style={{
                width: "150px",
                height: "200px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: '5px'
              }}
              image={image}
              title={name}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.description}>{description}</Typography>
          <Typography className={classes.size}>Size {size}</Typography>
          <Typography className={classes.size}>Type {type}</Typography>
          <Typography className={classes.productPrice}>
            {productPrice
              ? "Rs: " +
                productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                ".00"
              : ""}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={classes.name}>Order Details</Typography>
          <Typography className={classes.size}>Size {size}</Typography>
          <Typography className={classes.quantity}>
            Quantity {quantity}
          </Typography>
          <Typography className={classes.productPrice}>
            {productPrice
              ? "Rs: " +
                productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                ".00"
              : ""}
          </Typography>
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => {handleRemove();}}
        >
          Delete
        </Button>
      </Grid>
    </div>
  );
}
