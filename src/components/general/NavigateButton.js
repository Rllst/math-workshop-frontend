import {Deploy} from "grommet-icons";
import {Button} from "grommet";


const NavigateButton = ({href, Icon, label})=>{
    return(<Button
        margin='small'
        primary
        color='brand'
        icon={Icon? <Icon/> : <Deploy/>}
        href={href}
        label={label}
        />
    )
}

export default NavigateButton;