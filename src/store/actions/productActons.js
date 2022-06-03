export const FETCH_PRODUCT_LIST_BEGIN = "FETCH_PRODUCT_LIST_BEGIN";
export const FETCH_PRODUCT_LIST_SUCCESS = "FETCH_PRODUCT_LIST_SUCCESS";
export const FETCH_PRODUCT_LIST_FALIURE = "FETCH_PRODUCT_LIST_FALIURE";
export const ASSIGN_SELECTED_PRODUCT = "ASSIGN_SELECTED_PRODUCT";

export const fetchProductListBegin = () => ({
  type: FETCH_PRODUCT_LIST_BEGIN,
});

export const fetchProductListSuccess = () => {
  return (dispatch) => {
    var tempProducts = [];
    //let randType = Math.round(Math.random() * 100) % 5;
    //console.log(randType)

    for (let i = 0; i < 100; i++) {
      let randType = Math.round(Math.random() * 100) % 5;
      let randType2 = Math.round(Math.random() * 100) % 5;
      tempProducts.push({
        productName: `Product ${i}`,
        type:
          randType === 0
            ? "dress"
            : randType === 1
            ? "seasonal"
            : randType === 2
            ? "denim"
            : randType === 3
            ? "tshirt"
            : "top",
        color:
          randType === 0
            ? randType2 === 0
              ? ["red"]
              : randType2 === 1
              ? ["red", "green"]
              : randType2 === 2
              ? ["red", "green", "blue"]
              : randType2 === 3
              ? ["red", "green", "blue", "white"]
              : ["red", "green", "blue", "white", "black"]
            : randType === 1
            ? randType2 === 1
              ? ["green"]
              : randType2 === 2
              ? ["green", "blue"]
              : randType2 === 3
              ? ["green", "blue", "white"]
              : ["green", "blue", "white", "black"]
            : ["green", "blue", "white", "black"],

            size: ["M", "L"],
            price: (Math.floor(Math.random() * 100) + 5) * 100,
            description: `This is the Description of Product ${i}`,
            quantity: Math.round(Math.random() * 100),
            images: [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ],
        sku: "SKU" + randType + " " + randType2,
      });
    }
    dispatch({
      type: FETCH_PRODUCT_LIST_SUCCESS,
      payload: tempProducts,
    });
  };
};
export const fetchProductListFaliure = () => ({
  type: FETCH_PRODUCT_LIST_FALIURE,
});

export const assignSelectedProduct = (selectedProduct) => {
    return (dispatch) => {
        dispatch({
            type: ASSIGN_SELECTED_PRODUCT,
            payload: selectedProduct,
        })
    }
}
