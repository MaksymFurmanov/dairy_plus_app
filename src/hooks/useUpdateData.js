import {useServer} from "../providers/ServerProvider";
import {useState} from "react";

const useUpdateData = () => {
    const api = useServer();
    const [loading, setLoading] = useState(false);

    const updateDataItem = async (type, object) => {
        setLoading(true);
        try {
            const response = await fetch(`${api}/${type}/update`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(object)
                });
            if (response.ok) {
                const newObject = await response.json();
                console.log("Loaded", newObject);
                return newObject;
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            setLoading(false);
        }
    }

    return [updateDataItem, loading];
}

export default useUpdateData;