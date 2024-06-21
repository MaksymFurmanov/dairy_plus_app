import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const OutputStockContext = createContext(undefined);
const SetOutputStockContext = createContext(undefined);

const OutputStockProvider = ({children}) => {
    const [outputStock, setOutputStock, loading] =
        useReadData("output-stock-places");

    return <SetOutputStockContext.Provider value={setOutputStock}>
        <OutputStockContext.Provider value={outputStock}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </OutputStockContext.Provider>
    </SetOutputStockContext.Provider>
}

export const useOutputStock = () => useContext(OutputStockContext);
export const useSetOutputStock = () => useContext(SetOutputStockContext);

export default OutputStockProvider;