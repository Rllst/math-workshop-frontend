import {forwardRef, useState} from "react";
import {Box, Form, FormField, TextInput, Text} from "grommet";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import CommentService from "../../../../services/CommentService";
import useApi from "../../../../hooks/useApi";


const PostCreateForm = ({id}, ref)=>{

    const [answer, setAnswer] = useState('');
    const [comment] = useApi(CommentService.get, id);
    useCrudProvider(ref,
        undefined,
        ()=>CommentService.approve(id, {content: answer}, true),
        ()=>CommentService.remove(id)
    );


    return (
        <Box>

            <FormField>
                <Text>{comment.content}</Text>
            </FormField>
            <Form>
                <FormField label='Responce' required>
                    <TextInput value={answer.content}  name="content" onChange={e=>setAnswer(e.target.value)} />
                </FormField>
            </Form>
        </Box>
    )
}

export default forwardRef(PostCreateForm);