import {useState} from "react";

const useTab = (handler)=>{
    const [isActive, setIsActive] = useState(false);
    const [currentID, setCurrentId] = useState(null);
    const setState = (first, second) =>{
        handler();
        setIsActive(first);
        setCurrentId(second);
    }
    return [{isActive, currentID}, setState]
}

export default useTab;