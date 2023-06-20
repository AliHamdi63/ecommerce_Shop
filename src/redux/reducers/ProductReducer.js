export default function ProductReducer(state = [], action) {
    if (action.type === "PRODUCT-LIST")
        return action.payload;

    return state

}