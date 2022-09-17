import { useState, useEffect } from 'react';

const ERROR_CODES: number[] = [400, 404];
type DataJSONValue = { [x: string]: DataJSONValue } | null;
/**
 *
 * @param url
 * @returns [data, isLoading, isError]
 */
const useFetch = (url: string): Array<DataJSONValue | boolean | string> => {
    const [data, setData] = useState<DataJSONValue>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        // initialValue of the subscription
        let isSubscribed = true;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    Promise.reject();
                }
                const json = await response.json();

                if (ERROR_CODES.includes(json.code)) {
                    setErrorMsg(json.msg);
                    setIsError(true);
                    return;
                }

                if (isSubscribed) {
                    setIsError(false);
                    setData(json);
                }
            } catch (err) {
                console.error(err);
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

    return [data, isLoading, isError, errorMsg];
};

export default useFetch;
