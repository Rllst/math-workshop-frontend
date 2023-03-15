import useEditForm from "../../../hooks/useEditForm";
import {Box, Button, Form, FormField, TextArea, TextInput} from "grommet";
import CommentService from "../../../services/CommentService";
import {successMessage} from "../../../ToastHelper";

const CommentPostForm = ({id})=>{
    const [comment, , handleTextInput] = useEditForm();
    const submit = ()=>{
        CommentService.post(id, comment).then(()=>successMessage('Comment send'));
    }
    return(
        <Box pad='medium'>
            <Form>
                <FormField label='Email' required>
                    <TextInput value={comment.email} aria-label="description" name="email" onChange={handleTextInput} />
                </FormField>
                <FormField label='Name' required>
                    <TextInput value={comment.name} aria-label="description" name="name" onChange={handleTextInput} />
                </FormField>
                <FormField label='Content' required>
                    <TextArea value={comment.content} aria-label="description" name="content" onChange={handleTextInput} />
                </FormField>
                <Button alignSelf='start' onClick={submit} primary label='Прокоментувати!'/>
            </Form>
        </Box>
    )
}

export default CommentPostForm;