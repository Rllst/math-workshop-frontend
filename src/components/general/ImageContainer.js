import {Box} from "grommet";

const ImageContainer = ({src})=>{
    return(
        <Box background='dark-3' pad='xsmall' round>
            <Box
                 background={
                     {
                         image: 'url('+src+')'
                     }}
                 round
                height='medium'
            />
        </Box>
    )
}

export default ImageContainer;