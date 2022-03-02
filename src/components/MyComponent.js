
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";
import Loading from "./Loading";

const MyComponent = () => {

    const [store, dispatch] = useContext(StoreContext)
    const {data} = store
    const {products} = data
    console.log(store)
    return (
        <div>
            <h1>Products</h1>
            {store.loading
            ?   <Loading />
            :   <div>
                    <h2>Calzas</h2>
                    <ul>{products?.map((product) => (
                        <li key={product.id}>
                        
                                <h3>{product.id}</h3>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                    
                        </li>
                    ))}
                    </ul>
                    <button onClick={() => dispatch({ type: types.productDeleteAll})}>
                        Borrar
                    </button>
                    <button onClick={() => dispatch({ type: types.productChange})}>
                        Actualizar
                    </button>
                </div>
            }
        </div>
    )
}

export default MyComponent