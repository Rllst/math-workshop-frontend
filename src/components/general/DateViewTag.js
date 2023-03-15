import {Button} from "grommet";

const DateViewTag = ({title, Icon}) => {
    return(
        <Button
            color = 'accent-4'
            icon={Icon? <Icon/>: undefined}
            label={title}
            primary
        />
    )
}

export default DateViewTag;