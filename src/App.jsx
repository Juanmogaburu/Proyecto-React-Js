import { useEffect, useState } from "react";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import "./index.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

import { useAllProducts } from "./hooks/useProducts";


function App (){


  const { Products } = useAllProducts(3);

  return ( 
    <div>
      <NavBarComponent />
      <ItemListContainer productsData = {Products} />
    </div>
  );
}
export default App;