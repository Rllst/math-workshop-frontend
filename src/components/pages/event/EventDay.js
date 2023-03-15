import {Box, Text} from "grommet";
import {RadialSelected} from "grommet-icons";
import DateMapper from "../../../services/DateMapper";

const EventDay = ({date, events, onSelect})=>{
    return(
            <Box height='small' onClick={()=>onSelect(date)} border background='background-back' round="medium" margin='small'>
                <Box alignSelf='start' background='placeholder' margin='small' pad='xsmall' round='medium'>
                    <Text>{DateMapper.toDate(date)}</Text>
                </Box>
                {events.length!==0 ?
                <Box pad='medium' round='medium' background="accent-4">
                    {events.map(e=>{
                        return (
                        <Box direction='row' margin='xxsmall'>
                            <RadialSelected/>
                            <Text size='xsmall'>{e.name}</Text>
                        </Box>
                        )})}
                </Box>
               : <Text color='text-xweak'>Немає подій</Text>}
            </Box>
    )
}

export default EventDay;

