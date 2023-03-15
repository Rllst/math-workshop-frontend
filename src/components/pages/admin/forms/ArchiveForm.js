import {forwardRef, useState} from "react";
import {Button, FileInput, Form, FormField, TextInput} from "grommet";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";
import ArchiveService from "../../../../services/ArchiveService";
import FileItem from "../FileItem";


const ArchiveForm = ({id}, ref)=>{

    const [folder, ,handleTextInput] = useEditForm(id, ArchiveService.get);
    const [files, setFiles] = useState([]);
    useCrudProvider(ref,
        ()=>ArchiveService.post(folder),
        ()=>ArchiveService.patch(id, folder),
        ()=>ArchiveService.remove(id)
    );

    const handleFiles = (e)=>setFiles(e.target.files);
    const uploadFiles = ()=>ArchiveService.postFiles(id, files);

    return (
        <Form>
            <FormField label='Name' required>
                <TextInput value={folder.name} aria-label="name" name="name" onChange={handleTextInput} />
            </FormField>
            <FormField label='Description' required>
                <TextInput value={folder.description} aria-label="description" name="description" onChange={handleTextInput} />
            </FormField>
            {id &&
                <FormField label='Add files' width='medium'>
                    <FileInput multiple onChange={handleFiles}/>
                    <Button label='Upload' onClick={uploadFiles}/>
                </FormField>
            }
            <FormField>
                {folder.files?.map(f=><FileItem file={f}/>)}
            </FormField>
        </Form>
    )
}

export default forwardRef(ArchiveForm);