import {useCallback, useEffect, useMemo, useState} from "react";

const useLoader = (instance) =>{
    const [counter, setCounter] = useState(0);
    const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]);
    const dec = useCallback(() => setCounter(counter => counter - 1), [setCounter]);

    const interceptors = useMemo(() => ({
        request: config => (inc(), config),
        response: response => ((counter >= 0 && dec()), response),
        error: error => ((counter >= 0 && dec()), Promise.reject(error)),
    }), [inc, dec]);

    useEffect(() => {
        console.log('dsadsa');
        const reqInterceptor = instance.interceptors.request.use(interceptors.request, interceptors.error);
        const resInterceptor = instance.interceptors.response.use(interceptors.response, interceptors.error);
        return () => {
            instance.interceptors.request.eject(reqInterceptor);
            instance.interceptors.response.eject(resInterceptor);
        };
    }, [interceptors]);
    counter < 0  && setCounter(0)
    return [counter>0]
}

export default useLoader;