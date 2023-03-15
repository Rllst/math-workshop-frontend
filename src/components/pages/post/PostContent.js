import {useParams} from "react-router-dom";
import useApi from "../../../hooks/useApi";
import PostService from "../../../services/PostService";
import {Box, Text, Image, Button, Grid, Layer} from "grommet";
import {api} from "../../../Constansts";
import {Action, Chat, LinkPrevious} from "grommet-icons";
import CommentPostForm from "./CommentPostForm";
import CommentBlock from "./CommentBlock";
import Tag from "../../general/Tag";
import ContentBox from "../../general/ContentBox";
import InfoBox from "../../general/InfoBox";
import ImageContainer from "../../general/ImageContainer";
import {useState} from "react";

const PostContent = ()=>{
    const {id} = useParams();
    const [post,] = useApi(PostService.get, id);
    const [active, setActive] = useState(false);
    return(
        <Box>

            <ContentBox>
                <Grid container columns='1/2'>
                    <Box>
                        <Button margin='small' alignSelf='start' href='/news' primary icon={<LinkPrevious/>} label='До новин'/>
                        <ImageContainer src={api+'/post/image/'+id}/>
                        <Box gap='small' direction='row' margin='small'>
                            {post.categories?.map((c)=><Tag label={c.name}/>)}
                        </Box>
                    </Box>

                    <Box pad='small'>
                        <InfoBox title={post.title}/>
                        <Text alignSelf='start' size='medium'>{post.description}</Text>
                        <Box fill border>
                            <div dangerouslySetInnerHTML={{__html:post.content}}/>
                        </Box>
                    </Box>
                </Grid>
            </ContentBox>

                <Chat size='large' />
                <InfoBox title='Коментарі'/>

            <Box round pad='medium' background='light-2'  border>
                <CommentBlock comments = {post.comments} />
            </Box>
            <Button margin='small' alignSelf='start' primary icon={<Action/>} onClick={()=>setActive(true)} label='Прокоментувати'/>

            {active &&
                <Layer onClickOutside={()=>setActive(false)}>
                <CommentPostForm id={post.id}/>
            </Layer> }
        </Box>
    )
}

export default PostContent;