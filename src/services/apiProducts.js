import axios from "axios";
export function getAllProducts(limit = 3) {
    return axios.get (`https://dummyjson.com/products?limit=${limit}`);
}

export function getSingleProducts(id = 1){
    return axios.get(`https://dummyjson.com/products/${id}`)
}