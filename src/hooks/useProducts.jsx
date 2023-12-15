import { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiProducts";

export const useAllProducts = (limit) => {

    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts(limit)
        .then((res) => {
          setProducts(res.data.products)})
        .catch((err) => console.log(err));
      }, []);

      return {products};
};