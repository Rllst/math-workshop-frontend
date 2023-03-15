import {forwardRef, useEffect, useState} from "react";
import {Box, Button, DateInput, FileInput, Form, FormField, Grid, Text, TextInput} from "grommet";
import ImageItem from "../ImageItem";
import GalleryService from "../../../../services/GalleryService";
import useEditForm from "../../../../hooks/useEditForm";
import useCrudProvider from "../../../../hooks/useCrudProvider";

const GalleryForm = ({id}, ref) => {

    const [folder, setField ,handleTextInput] = useEditForm(id, GalleryService.get);

    const [images, setImages] = useState([]);
    const handleDateChange = (event) =>setField('date', event.value);
    const handleImageAdd = (event) =>setImages(event.target.files);

    useCrudProvider(ref,
        ()=>GalleryService.post(folder),
        ()=>GalleryService.patch(id, folder),
        ()=>GalleryService.remove(id)
        )
    const uploadImages = () =>GalleryService.postImages(images,id);
    return (
            <Form>
                <FormField label='Name' required>
                    <TextInput value={folder.name} aria-label="name" name="name" onChange={handleTextInput} />
                </FormField>
                <FormField label='Description' required>
                    <TextInput value={folder.description} aria-label="description" name="description" onChange={handleTextInput} />
                </FormField>
                <FormField label='Date' required>
                    <DateInput name='date' format='dd/mm/yyyy' value={folder.date} onChange={handleDateChange}/>
                </FormField>
                {id &&
                    <FormField label='Add images' width='medium'>
                        <FileInput multiple onChange={handleImageAdd}/>
                        <Button label='Upload' onClick={uploadImages}/>
                    </FormField>
                }
                <Grid gap='small' columns='small'>
                    {folder.images?.map(i=><ImageItem id={i.id}/>)}
                </Grid>
            </Form>
    );
}

export default forwardRef(GalleryForm);