import {useRef} from "react";

const useCrudConsumer = (onExit)=>{
    const ref = useRef();
    const create = ()=>{
        ref.current.create();
        onExit();
    };
    const update = ()=>{
        ref.current.update();
        onExit();
    };
    const remove = ()=>{
        ref.current.remove();
        onExit();
    };
    return [ref, {create, update, remove}]
}

export default useCrudConsumer;