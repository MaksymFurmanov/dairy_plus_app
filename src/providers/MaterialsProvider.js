import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const MaterialsContext = createContext(undefined);
const SetMaterialsContext = createContext(undefined);

const MaterialsProvider = ({children}) => {
    const [materials, setMaterials, loading] =
        useReadData("materials");

    return <SetMaterialsContext.Provider value={setMaterials}>
        <MaterialsContext.Provider value={materials}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </MaterialsContext.Provider>
    </SetMaterialsContext.Provider>
}

export const useMaterials = () => useContext(MaterialsContext);
export const useSetMaterials = () => useContext(SetMaterialsContext);

export default MaterialsProvider