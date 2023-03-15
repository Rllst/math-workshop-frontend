import {useImperativeHandle} from "react";

const useCrudProvider = (ref, create, update, remove) =>{
    useImperativeHandle(ref, ()=> {
        return{
            create(){
                create();
            },
            update(){
                update();
            },
            remove(){
                remove();
            }
        }});
}
export default useCrudProvider;