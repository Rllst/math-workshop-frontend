import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import EventService from "../../../../services/EventSevice";
import EventForm from "../forms/EventForm";

const EventTab = () => {
    const [events, changeHandler] = useApi(EventService.getAll);
    const columns = [
        {
            property:"id",
            header: "Id"
        },
        {
            property: "name",
            header: "Name"
        },
        {
            property: "description",
            header: "Description"
        },
        {
            property: "date",
            header: "Date"
        }
    ]
    return (
        <BaseTab data={events} tableColumns={columns} handler ={changeHandler} form={EventForm}/>
    )
}

export default EventTab;