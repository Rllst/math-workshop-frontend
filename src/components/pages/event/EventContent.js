import {Box, Calendar, Layer, Text} from "grommet";
import {useEffect, useState} from "react";
import EventDay from "./EventDay";
import {RadialSelected} from "grommet-icons";
import EventService from "../../../services/EventSevice";
import useApi from "../../../hooks/useApi";
import DateMapper from "../../../services/DateMapper";

const EventContent = ()=>{
    const [events] = useApi(EventService.getAll);
    const [selectedDate, setSelectedDate] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    const onSelect = (date)=>{
        setSelectedDate(date);
        setIsSelected(true);
    }
    return(
        <>
            <Calendar fill>
                {({date})=><EventDay date={date} events = {events.filter(e=>new Date(e.date).toDateString()===date.toDateString())} onSelect={onSelect}/>}
            </Calendar>
            {isSelected &&
                <Layer onClickOutside={()=>setIsSelected(false)}>
                    <Box width='xlarge' pad='medium' round='medium'>
                        <Text>{"Події за  "+DateMapper.toDate(selectedDate)}</Text>
                        {events.filter(e=>new Date(e.date).toDateString()===selectedDate.toDateString()).map((e)=>{
                            return (
                                <Box pad='small' round='medium' margin='xxsmall'>
                                    <Box direction='row'>
                                        <RadialSelected color='gold'/>
                                        <Text size='medium'>{e.name}</Text>
                                    </Box>
                                    <Text size='small'>{e.description}</Text>
                                </Box>
                            )})}
                    </Box>
                </Layer>
            }
        </>
    )
}

export default EventContent;