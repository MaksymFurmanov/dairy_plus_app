import {useEffect, useMemo, useState} from 'react';
import {useServer} from '../providers/ServerProvider';

const useReadData = (type) => {
    const api = useServer();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${api}/${type}`);
                if (response.ok) {
                    const fetchedData = await response.json();
                    console.log(type, fetchedData);
                    setData(fetchedData);
                } else {
                    console.log(`No ${type} found`);
                }
            } catch (e) {
                console.log(`Error fetching ${type}: ${e.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [api, type]);

    return useMemo(() => [data, setData, loading], [data, setData, loading]);
};

export default useReadData;
