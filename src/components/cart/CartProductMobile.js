import { Grid, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";



const useStyles = makeStyles(() => ({
    cardItem: {
        padding: '12px',
        background: 'white',
        marginBottom: '10px',
    },
  name: {
    fontSize: "20px",
    fontFamily: "poppins",
    fontWeight: "500",
    marginBottom: "10px",
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
    fontWeight: '500'
  },
}));

export default function CartProductMobile({
  name,
  description,
  size,
  price,
  quantity,
  image,
  handleRemove
}) {
  const productPrice = quantity * price;
  const classes = useStyles();

  

  return (
    <div className={classes.cardItem}>
      <Grid container spacing={5}>
        <Grid item xs={4} md={2}>
          <div style={{ alignContent: "left" }}>
            <CardMedia
              style={{
                width: "100px",
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
        <Grid item xs={6} md={2}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.description}>{description}</Typography>
          <Typography className={classes.size}>Size <span style={{color: '#9C27B0'}}>{size}</span> </Typography>
          <Typography className={classes.quantity}>
            Quantity <span style={{color: '#9C27B0'}}>{quantity}</span>
          </Typography>
          <Typography className={classes.productPrice}>
            {productPrice
              ? "Rs: " +
                productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                ".00"
              : ""}
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
            <DeleteIcon style={{color: '#9C27B0', cursor: 'pointer'}} onClick={() => {handleRemove();}} />
        </Grid>
       
      </Grid>
    
    </div>
  );
}

