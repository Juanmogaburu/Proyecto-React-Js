import { useEffect, useState } from "react";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import "./index.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

import { useAllProducts } from "./hooks/useProducts";


function App (){


  const { products } = useAllProducts(3);

  return ( 
    <div>
      <NavBarComponent />
      <ItemListContainer productsData = {products} />
    </div>
  );
}
export default App;