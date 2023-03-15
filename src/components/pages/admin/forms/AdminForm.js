import {forwardRef} from "react";
import {Form, FormField, TextInput} from "grommet";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";
import AdminService from "../../../../services/AdminService";


const AdminForm = ({id}, ref)=>{

    const [admin, ,handleTextInput] = useEditForm(id, AdminService.get);
    useCrudProvider(ref,
        ()=>AdminService.post(admin),
        ()=>AdminService.patch(id, admin),
        ()=>AdminService.remove(id)
    );

    return (
        <Form>
            <FormField label='Name' required>
                <TextInput value={admin.name} aria-label="name" name="name" onChange={handleTextInput} />
            </FormField>
            <FormField label='Password' required>
                <TextInput value={admin.password} aria-label="password" name="password" onChange={handleTextInput} />
            </FormField>
            <FormField label='Email' required>
                <TextInput value={admin.email} aria-label="email" name="email" onChange={handleTextInput} />
            </FormField>
        </Form>
    )
}

export default forwardRef(AdminForm);