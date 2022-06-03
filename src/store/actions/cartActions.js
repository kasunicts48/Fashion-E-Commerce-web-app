export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"

export const addProductToCart = (product) => {
    //console.log(product)
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: product,
        })
        
    }
}
export const removeProductFromCart = (productLocation) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: productLocation,
        })
        
    }
}