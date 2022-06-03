import * as Actions from "../actions/productActons";

const initialState = {
  loading: null,
  allProducts: [],
  selectedProduct: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_PRODUCT_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Actions.FETCH_PRODUCT_LIST_SUCCESS:
      //console.log(action.payload)
    return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case Actions.FETCH_PRODUCT_LIST_FALIURE:
      return {
        ...state,
        allProducts: [],
        loading: false,
      };
      case Actions.ASSIGN_SELECTED_PRODUCT:
        return{
          ...state,
          selectedProduct: action.payload,
        }
    default:
      return state;
  }
};

export default productReducer;
