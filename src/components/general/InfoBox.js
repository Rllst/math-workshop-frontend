import {Box, Text} from "grommet";

const InfoBox = ({title})=>{
    return(
        <Box
            pad='small'
            background={'accent-4'}
            border
            round
            align='start'
            alignSelf='start'
        >
            <Text size='large'>{title}</Text>
        </Box>
    )
}

export default InfoBox;