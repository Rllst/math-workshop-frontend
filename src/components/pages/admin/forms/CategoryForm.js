import {forwardRef} from "react";
import {Form, FormField, TextInput} from "grommet";
import CategoryService from "../../../../services/CategoryService";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";


const PostCreateForm = ({id}, ref)=>{

    const [category, ,handleTextInput] = useEditForm(id, CategoryService.get);
    useCrudProvider(ref,
        ()=>CategoryService.post(category),
        ()=>CategoryService.patch(id, category),
        ()=>CategoryService.remove(id)
        );

    return (
        <Form>
            <FormField label='Name' required>
                <TextInput value={category.name} aria-label="name" name="name" onChange={handleTextInput} />
            </FormField>
            <FormField label='Description' required>
                <TextInput value={category.description} aria-label="description" name="description" onChange={handleTextInput} />
            </FormField>
        </Form>
    )
}

export default forwardRef(PostCreateForm);