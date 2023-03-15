import {Box, Button, Image, Text} from "grommet";
import NavigateButton from "../../general/NavigateButton";

const MenuCard = ({img, title, link, icon}) => {
    return(
        <Box round
             border
             pad='small'
             background='light-4'
             margin='small'
        >
            <Box border>
                <Image fill src={img}/>
            </Box>
            <Box>
                <NavigateButton Icon={icon} label={title} href={link}/>
            </Box>
        </Box>
    )
}

export default MenuCard;