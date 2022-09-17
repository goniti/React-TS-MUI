import { useState, useEffect } from 'react';
/**
 *
 * @param url
 * @returns [data, isLoading, isError]
 */
const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        // initialValue of the subscription
        let isSubscribed = true;

        setIsLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();

                if (isSubscribed) {
                    setData(json);
                }
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        // cancel the subscription
        return () => {
            isSubscribed = false;
        };
    }, [url]);

    return [data, isLoading, isError];
};

export default useFetch;
