import {useEffect, useState} from "react";

const useEditForm = (id, method)=>{
    const [state, setState] = useState({});
    useEffect(()=>{
        if(id){
            method(id).then((res)=>setState(res));
        }
    },[id]);
    const setField = (name, value) =>{
        setState({...state, [name]:value})
    }
    const handleTextInput = (e) =>{
        setField(e.target.name, e.target.value);
    }
    return[state, setField, handleTextInput]
}

export default useEditForm;