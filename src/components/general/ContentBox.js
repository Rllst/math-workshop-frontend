import {Box} from "grommet";

const ContentBox = ({children})=>{
    return(
        <Box pad='small'
             background='light-4'
             border
             round>
            {children}
        </Box>
    )
}

export default ContentBox;