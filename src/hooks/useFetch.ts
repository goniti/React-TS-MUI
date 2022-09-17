import { useState, useEffect } from 'react';

type DataJSONValue = string | number | boolean | { [x: string]: DataJSONValue };

/**
 *
 * @param url
 * @returns [data, isLoading, isError]
 */
const useFetch = (url: string) => {
    const [data, setData] = useState<DataJSONValue>({});
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
                    setIsError(false);
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
