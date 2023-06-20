import axios from "axios";

export function ProductsAction() {
    let data = axios.get("https://dummyjson.com/products")
        .then((res) => {
            // console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
    return {
        type: "PRODUCT-LIST",
        payload: data
    };
}