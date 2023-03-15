import {Box, Button, Grid, Pagination, Text} from "grommet";
import CategoryService from "../../../services/CategoryService";
import useApi from "../../../hooks/useApi";
import {useEffect, useState} from "react";
import PostService from "../../../services/PostService";
import PostPreview from "./PostPreview";

const NewsContent = ({query})=>{
    const [categories] = useApi(CategoryService.getAll);
    const [posts, setPosts] = useState([]);
    const [page, setPage]=useState(0);
    const [chose, setChose]=useState([]);
    const [total, setTotal]=useState(0);
    useEffect(()=>{
        PostService.getPage(query, chose, page).then(res=>{
            setPosts(res.posts);
            setTotal(res.totalCount);
        });
    },[query, chose, page]);
    const rejectedCategories = ()=> categories.filter(c=>!chose.map(c=>c.id).includes(c.id));

    const chooseCategory = (id)=>{
        console.log(query);
        setChose([...chose, categories.find(category=>category.id===id)]);
    }
    const rejectCategory = (id)=>{
        setChose(chose.filter(category=>category.id!==id));
    }

    return(
        <Box>
            <Box direction='row' gap='xsmall'>
                <Box>
                    <Box  width ='medium' background='light-2' round pad='medium' margin='small' gap='small' border>
                        <Box gap='xxsmall'>
                            <Box background='accent-4' width='small' round border>
                                <Text>Відхилені категорії</Text>
                            </Box>
                            <Box gap='xsmall'>
                                {rejectedCategories().map(c=><Button size='small' label={c.name} primary color='status-error' onClick={()=>chooseCategory(c.id)}/>)}
                            </Box>
                        </Box>
                        <Box gap='xxsmall'>
                            <Box background='accent-4' width='small' round border>
                                <Text>Обрані категорії</Text>
                            </Box>
                            <Box gap='xsmall'>
                                {chose.map(c=><Button size='small' label={c.name} primary color='status-ok' onClick={()=>rejectCategory(c.id)}/>)}
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box width ='xlarge'  pad='small'>
                    <Grid container columns='medium' gap='small'>
                        {posts.map(p=><PostPreview post={p}/>)}
                    </Grid>
                </Box>
            </Box>

            <Box align='center' pad='medium'>
                <Pagination background="brand" numberItems={total} page={page} onChange={(e)=>setPage(e.target.page)}/>
            </Box>
        </Box>
    )
}

export default NewsContent;