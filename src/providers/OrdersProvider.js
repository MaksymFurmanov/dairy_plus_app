import {createContext, useContext} from "react";
import useReadData from "../hooks/useReadData";
import Alert from "../components/BasicComponents/Alert";

const OrdersContext = createContext(undefined);
const SetOrdersContext = createContext(undefined);

const OrdersProvider = ({children}) => {
    const [orders, setOrders, loading] = useReadData("orders");

    return <SetOrdersContext.Provider value={setOrders}>
        <OrdersContext.Provider value={orders}>
            {loading ? <Alert type={"loading"}>Loading...</Alert> : children}
        </OrdersContext.Provider>
    </SetOrdersContext.Provider>
}

export const useOrders = () => useContext(OrdersContext);
export const useSetOrders = () => useContext(SetOrdersContext);

export default OrdersProvider