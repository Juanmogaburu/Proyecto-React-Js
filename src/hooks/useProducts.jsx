import { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiProducts";

export const useAllProducts = (limit = 3) => {

    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts(3)
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.log(err));
    
        getSingleProducts().then((res) => console.log(res));  
      }, []);

      return products;
};
