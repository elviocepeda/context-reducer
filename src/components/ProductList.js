
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const ProductsList = () => {

    const [store, dispatch] = useContext(StoreContext)
    const {data} = store
    const {products} = data
    
    return (
        <div className="products-list">
            <h1>Products</h1>
            {store.loading
            ?   <Loading />
            :   <div>
                    
                    <ul>{products?.map((product) => (
                        <li key={product.id}>
                        
                            <ProductCard product={product} />
                    
                        </li>
                    ))}
                    </ul>
                    <button onClick={() => dispatch({ type: types.productDeleteAll, payload: data.products = []})}>
                        Eliminar
                    </button>
                </div>
            }
        </div>
    )
}

export default ProductsList;