import React from "react";
import { isMobile } from "react-device-detect";
import CartProductMobile from "../../../../components/cart/CartProductMobile";
import CartProductWeb from "../../../../components/cart/CartProductWeb";
import image1 from "../../../../images/productsImgs/product1.jpg";
import image2 from "../../../../images/productsImgs/product2.jpg";
import image3 from "../../../../images/productsImgs/product3.jpg";
import image4 from "../../../../images/productsImgs/product4.jpg";
import image5 from "../../../../images/productsImgs/product5.jpg";
import image6 from "../../../../images/productsImgs/product6.jpg";
import image7 from "../../../../images/productsImgs/product7.jpg";
import image8 from "../../../../images/productsImgs/product8.jpg";
import image9 from "../../../../images/productsImgs/product9.jpg";
import image10 from "../../../../images/productsImgs/product10.jpg";
import image11 from "../../../../images/productsImgs/product11.jpg";
import image12 from "../../../../images/productsImgs/product12.jpg";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../../../store/actions/cartActions";

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export default function SingleCartItemLayout({ cartItem,location }) {
  const { product, quantity, size } = cartItem;
  const { productName, description, price, type } = product;

  const displayImage = imageArray[product.images[0]];

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeProductFromCart(location))
  }
  return (
    <div>
      {isMobile ? (
        <CartProductMobile
          name={productName}
          description={description}
          size={size}
          price={price}
          quantity={quantity}
          image={displayImage}
          handleRemove={handleRemove}
        />
       ) : (
        <CartProductWeb
          name={productName}
          description={description}
          size={size}
          price={price}
          quantity={quantity}
          image={displayImage}
          //sku={sku}
          type={type}
          handleRemove={handleRemove}
        />
      )}
    </div>
  );
}
