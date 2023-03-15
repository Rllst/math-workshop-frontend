import {Box, Button, Text} from "grommet";
import {Calendar, Deploy, View} from "grommet-icons";
import {api} from "../../../Constansts";
import ContentBox from "../../general/ContentBox";
import ImageContainer from "../../general/ImageContainer";
import DateViewTag from "../../general/DateViewTag";
import DateMapper from "../../../services/DateMapper";


const PostPreview = ({post})=>{
    return(
        <ContentBox>
            <ImageContainer src={api+'/post/image/'+post.id}/>

            <Box>
                <Box direction='row'>
                    <Box direction='row' margin='small' gap='small'>
                        <DateViewTag Icon={View} title={post.views}/>
                        <DateViewTag Icon={Calendar}  title={DateMapper.toDate(post.date)}/>
                    </Box>
                </Box>
                <Box>
                <Text size='xlarge' alignSelf='start'>{post.title}</Text>
                <Text size='medium'  alignSelf='start'>{post.description}</Text>
                </Box>
            </Box>
            <Button primary alignSelf='end' round icon={<Deploy/>} href={'/post/'+post.id}/>
        </ContentBox>
    );
}

export default PostPreview;