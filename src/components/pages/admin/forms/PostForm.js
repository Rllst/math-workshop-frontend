import {forwardRef, useEffect, useState} from "react";
import {Box, Button, FileInput, Form, FormField, Grid, Image, Layer, Tag, Text, TextInput} from "grommet";
import ContentEditor from "../ContentEditor";
import {api} from "../../../../Constansts";
import PostService from "../../../../services/PostService";
import CategoryService from "../../../../services/CategoryService";
import useCrudProvider from "../../../../hooks/useCrudProvider";
import useEditForm from "../../../../hooks/useEditForm";
import useApi from "../../../../hooks/useApi";

const PostForm = ({id},ref)=>{

    const [contentChange, setContentChange] = useState(false);

    const [imageUrl, setImageUrl] = useState(api+'/post/image/'+id);
    const [image, setImage] = useState(null);

    const [post, setField, handleTextInput] = useEditForm(id, PostService.get);

    const [categories,] = useApi(CategoryService.getAll);
    useEffect(()=>{
        setField('categories', []);
    },[]);

    useCrudProvider(ref,
        ()=>PostService.post(post),
        ()=>PostService.patch(id, post),
        ()=>PostService.remove(id)
        );

    const handleImageChange = (event) => {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    };
    const updateImage = ()=>PostService.patchImage(id, image);

    const handleCategoryDelete = (id)=>setField('categories', post.categories.filter(c=>c.id !== id));
    const  handleCategoryAdd = (id)=>setField('categories', [...post.categories, categories.filter(c=>c.id === id)[0]]);

    return (


            <Form>

                <FormField label='Title' required>
                    <TextInput value={post.title} aria-label="title" name="title" onChange={handleTextInput} />
                </FormField>
                <FormField label='Description' required>
                    <TextInput value={post.description} aria-label="description" name="description" onChange={handleTextInput} />
                </FormField>

                <FormField label='Content' required width='small'>
                    <Button onClick={()=>setContentChange(true)} label='EditContent'/>
                    {contentChange &&
                        <Layer>
                            <Box width='xlarge' round='medium'>
                                <ContentEditor content={post.content} onChange={(v)=>setField('content',v)}/>
                                <Box width='small'  pad='small'>
                                    <Button onClick={()=>setContentChange(false)} label='Done?'/>
                                </Box>
                            </Box>
                        </Layer>}
                </FormField>
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
                <Text size='2xl'>Categories</Text>
                <Grid columns={['1/2','1/2']}
                      areas={[['chose', 'rejected']]}>
                    <Box gridArea='chose'>
                        <Text>Chose</Text>
                        <Box gap='small' direction="row" overflow='auto' pad='small'>
                            {categories
                                .filter((c)=>post.categories?.map(c=>c.id).includes(c.id))
                                .map(c=><Tag size='medium' name={c.name} value={c.id} onRemove={()=>handleCategoryDelete(c.id)}/>)}
                        </Box>
                    </Box>
                    <Box gridArea='rejected' >
                        <Text>Rejected</Text>
                        <Box gap='small' direction="row" overflow='auto' pad='small'>
                            {categories
                                .filter((c)=>!post.categories?.map(c=>c.id).includes(c.id))
                                .map(c=><Tag size='medium' name={c.name} value={c.id} onRemove={()=>handleCategoryAdd(c.id)}/>)}
                        </Box>
                    </Box>
                </Grid>
            </Form>
    )
}

export default forwardRef(PostForm);