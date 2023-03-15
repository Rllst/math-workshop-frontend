import {Layer, Spinner} from "grommet";

const Loader = ()=>{
    return(
        <Layer position='bottom-left'
        modal={false}
        >
            <Spinner size='large'/>
        </Layer>
    )
}

export default Loader;