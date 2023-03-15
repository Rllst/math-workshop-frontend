import {Image, Box, Text} from "grommet";
import {api} from "../../../Constansts";
import ImageContainer from "../../general/ImageContainer";

const TeamMemberCard = ({member})=>{
    return(
        <Box
            border
            round
            direction='row'
        >
            <Box width='medium' height='medium' >
                <ImageContainer src={api+'/team/image/'+member.id}/>
            </Box>
            <Box width='medium'>
            <Text size = '3xl'>{member.name}</Text>
                <Text size = '1xl'>{member.description}</Text>
            </Box>
        </Box>
    )
}

export default TeamMemberCard;