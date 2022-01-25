import { productConstants } from "../actions/constants";

const initialState = {
    error:null,
    loading:false,
    products: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                loading:false,
                products: action.payload.products
            }
            break;
        case productConstants.ADD_PRODUCT_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
            case productConstants.ADD_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case productConstants.ADD_PRODUCT_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}