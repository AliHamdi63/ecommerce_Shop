export default function ProductInfoReducer(state = [], action) {
    if (action.type === "PRODUCT-INFO")
        return action.payload;

    return state

}