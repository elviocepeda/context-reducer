
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const ProductsList = () => {

    const [store] = useContext(StoreContext)
    const {data} = store
    const {products} = data
    
    return (
        <div className="products-list">
            <h1>Products</h1>
            {store.loading
            ?   <Loading />
            :   <div className="products">
                    
                    <ul>{products?.map((product) => (
                        <li key={product.id}>
                        
                            <ProductCard product={product} />
                    
                        </li>
                    ))}
                    </ul>
                    
                    
                </div>
            }
        </div>
    )
}

export default ProductsList;