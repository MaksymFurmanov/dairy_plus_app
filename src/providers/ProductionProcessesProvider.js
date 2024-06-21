import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const ProductionProcessesContext = createContext(undefined);
const SetProductionProcessesContext = createContext(undefined);

const ProductionProcessesProvider = ({children}) => {
    const [productionProcesses, setProductionProcesses, loading] =
        useReadData("production-processes");

    return <SetProductionProcessesContext.Provider value={setProductionProcesses}>
        <ProductionProcessesContext.Provider value={productionProcesses}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </ProductionProcessesContext.Provider>
    </SetProductionProcessesContext.Provider>
}

export const useProductionProcesses = () => useContext(ProductionProcessesContext);
export const useSetProductionProcesses = () => useContext(SetProductionProcessesContext);

export default ProductionProcessesProvider