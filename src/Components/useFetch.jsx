import { useEffect, useState, useRef } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortController = useRef(null);

    useEffect(() => {
        abortController.current = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.current.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            if (abortController.current) {
                abortController.current.abort();
            }
        };
    }, [url]);
    return { data, loading, error };
}