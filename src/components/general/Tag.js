import {Button} from "grommet";

const Tag = ({label, Icon})=>{
    return(
        <Button
            color='accent-4'
            label={label}
            icon={Icon? <Icon/>:undefined}
            primary
            />
    )
}

export default Tag;