import {forwardRef} from "react";
import {DateInput, Form, FormField, TextInput} from "grommet";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";
import EventService from "../../../../services/EventSevice";


const EventForm = ({id}, ref)=>{

    const [event, setField ,handleTextInput] = useEditForm(id, EventService.get);
    useCrudProvider(ref,
        ()=>EventService.post(event),
        ()=>EventService.patch(id, event),
        ()=>EventService.remove(id)
    );
    const handleDateChange =(e)=>setField('date',e.value);

    return (
        <Form>
            <FormField label='Name' required>
                <TextInput value={event.name} aria-label="name" name="name" onChange={handleTextInput} />
            </FormField>
            <FormField label='Description' required>
                <TextInput value={event.description} aria-label="description" name="description" onChange={handleTextInput} />
            </FormField>
            <FormField label='Date' required>
                <DateInput name='date' format='dd/mm/yyyy' value={event.date} onChange={handleDateChange}/>
            </FormField>
        </Form>
    )
}

export default forwardRef(EventForm);