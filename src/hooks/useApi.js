import {useEffect, useState} from "react";

const useApi = (method, ...params)=>{
    const [change, setChange] = useState(false);
    const [data, setData] = useState([]);
    useEffect(()=>{
        if(params.length===0){
            method().then(res=>setData(res));
        }else{
            method(params[0]).then(res=>setData(res));
        }
    },[change])

    return [data, ()=>setChange(!change)];
}

export default useApi;