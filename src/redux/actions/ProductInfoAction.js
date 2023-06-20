import axios from "axios";

export function ProductInfoAction(id) {
    let data = axios.get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
            // console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
    return {
        type: "PRODUCT-INFO",
        payload: data
    };
}