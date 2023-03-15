import {forwardRef, useState} from "react";
import {Box, Button, FileInput, Form, FormField, Grid, Image, Text, TextInput} from "grommet";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";
import TeamService from "../../../../services/TeamService";
import {api} from "../../../../Constansts";


const QuoteForm = ({id}, ref)=>{

    const [teamMember, ,handleTextInput] = useEditForm(id, TeamService.get);
    const [imageUrl, setImageUrl] = useState(api+'/team/image/'+id);
    const [image, setImage] = useState(null);
    useCrudProvider(ref,
        ()=>TeamService.post(teamMember),
        ()=>TeamService.patch(id, teamMember),
        ()=>TeamService.remove(id)
    );


    const handleImageChange = (event) => {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    };
    const updateImage = ()=>TeamService.patchImage(id, image);
    return (
        <Form>
            <FormField label='Name' required>
                <TextInput value={teamMember.name} aria-label="name" name="name" onChange={handleTextInput} />
            </FormField>
            <FormField label='Description' required>
                <TextInput value={teamMember.description} aria-label="description" name="description" onChange={handleTextInput} />
            </FormField>
            <FormField>
                {id && <Box>
                    <Text size='2xl'>Image</Text>
                    <Grid columns={['1/2', '1/2']}
                          areas={[['input','preview']]}
                          gap="medium">
                        <Box gridArea='input'>
                            <FileInput onChange={handleImageChange}/>
                            {image && <Button color='status-warning' label='Set photo' onClick={updateImage}/>}
                        </Box>
                        <Box gridArea='preview'>
                            <Text>Current image</Text>
                            <Box width='medium'>
                                <Image src = {imageUrl}/>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                }
            </FormField>
        </Form>
    )
}

export default forwardRef(QuoteForm);