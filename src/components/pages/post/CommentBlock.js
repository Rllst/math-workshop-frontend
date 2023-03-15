import {Avatar, Box, Text} from "grommet";
import {UserNew} from "grommet-icons";

const CommentBlock = ({comments}) =>{
    return(
        <Box gap='small'>
            {comments?.map((comment)=>{
                return(
                    <Box border direction='row' round='large'>
                        <Avatar background={comment.is_administrator? 'status-error': 'brand'}>
                            <UserNew color="light-2" />
                        </Avatar>
                        <Box>
                            <Text alignSelf='start' color='dark-3'>{comment.name+( comment.is_administrator? '(admin)':'')}</Text>
                            <Text alignSelf='center'>{comment.content}</Text>
                        </Box>

                    </Box>
                )
            })}
        </Box>
    )
}

export default CommentBlock;