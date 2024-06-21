import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const ProductsContext = createContext(undefined);
const SetProductsContext = createContext(undefined);

const ProductsProvider = ({children}) => {
    const [products, setProducts, loading] =
        useReadData("products");

    return <SetProductsContext.Provider value={setProducts}>
        <ProductsContext.Provider value={products}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </ProductsContext.Provider>
    </SetProductsContext.Provider>
}

export const useProducts = () => useContext(ProductsContext);
export const useSetProducts = () => useContext(SetProductsContext);

export default ProductsProvider