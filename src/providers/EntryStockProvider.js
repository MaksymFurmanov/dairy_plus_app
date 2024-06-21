import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const EntryStockContext = createContext(undefined);
const SetEntryStockContext = createContext(undefined);

const EntryStockProvider = ({children}) => {
    const [entryStock, setEntryStock, loading] =
        useReadData("entry-stock-places");

    return <SetEntryStockContext.Provider value={setEntryStock}>
        <EntryStockContext.Provider value={entryStock}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </EntryStockContext.Provider>
    </SetEntryStockContext.Provider>
}

export const useEntryStock = () => useContext(EntryStockContext);
export const useSetEntryStock = () => useContext(SetEntryStockContext);

export default EntryStockProvider;