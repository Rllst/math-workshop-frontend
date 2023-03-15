import {Box, Button, Card, Text} from "grommet";
import {Calendar, Deploy} from "grommet-icons";

const ArchiveFolderPreview = ({folder})=>{
    return(
        <Box pad="small" align="start">
            <Card  width="large" pad="medium">
                <Text size='2xl'>{folder.name}</Text>
                <Text size='large'>{folder.description}</Text>
                <Button margin='small' alignSelf='end' icon={<Deploy/>} label='Переглянути' primary href={'/archive/'+folder.id}/>
            </Card>
        </Box>
    )
}

export default ArchiveFolderPreview;