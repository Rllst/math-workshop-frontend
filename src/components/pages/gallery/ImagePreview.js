import {Box, Image} from "grommet";
import {api} from "../../../Constansts";

const ImagePreview = ({id, handleClick})=>{
    return(
        <Box round='xsmall' width='medium' pad='xxsmall' background='dark-3' onClick={()=>handleClick(id)}>
            <Box background={
                {
                    image: 'url('+api+'/gallery/image/'+id+')',
                }
            }
            height='medium'>
            </Box>
        </Box>
    )
}

export default ImagePreview;