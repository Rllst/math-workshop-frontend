import {forwardRef} from "react";
import {Form, FormField, TextInput} from "grommet";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";
import QuoteService from "../../../../services/QuoteService";


const QuoteForm = ({id}, ref)=>{

    const [quote, ,handleTextInput] = useEditForm(id, QuoteService.get);
    useCrudProvider(ref,
        ()=>QuoteService.post(quote),
        ()=>QuoteService.patch(id, quote),
        ()=>QuoteService.remove(id)
    );

    return (
        <Form>
            <FormField label='Author' required>
                <TextInput value={quote.author} aria-label="name" name="author" onChange={handleTextInput} />
            </FormField>
            <FormField label='Content' required>
                <TextInput value={quote.content} aria-label="description" name="content" onChange={handleTextInput} />
            </FormField>
        </Form>
    )
}

export default forwardRef(QuoteForm);