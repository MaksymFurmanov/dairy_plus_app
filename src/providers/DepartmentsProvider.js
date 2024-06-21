import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const DepartmentsContext = createContext(undefined);
const SetDepartmentsContext = createContext(undefined);

const DepartmentsProvider = ({children}) => {
    const [departments, setDepartments, loading] =
        useReadData("departments");

    return <SetDepartmentsContext.Provider value={setDepartments}>
        <DepartmentsContext.Provider value={departments}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </DepartmentsContext.Provider>
    </SetDepartmentsContext.Provider>
}

export const useDepartments = () => useContext(DepartmentsContext);
export const useSetDepartments = () => useContext(SetDepartmentsContext);

export default DepartmentsProvider