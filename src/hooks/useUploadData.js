import {useServer} from "../providers/ServerProvider";
import {useState} from "react";

const useUpdateData = () => {
    const api = useServer();
    const [loading, setLoading] = useState(false);

    const updateDataItems = async (type, objects) => {
        setLoading(true);
        try {
            const response = await fetch(`${api}/${type}/upload`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objects)
            });
            if (response.ok) {
                const newObjects = await response.json();
                console.log("Loaded", newObjects);
                return newObjects;
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            setLoading(false);
        }
    };

    return [updateDataItems, loading];
};

export default useUpdateData;
