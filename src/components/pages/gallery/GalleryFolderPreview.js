import {Box, Button, Card, Text} from "grommet";
import {Calendar, Deploy} from "grommet-icons";
import DateMapper from "../../../services/DateMapper";

const GalleryFolderPreview = ({folder})=>{
    return(
        <Box pad="small" align="start">
            <Card  width="large" pad="medium">
                <Text size='2xl'>{folder.name}</Text>
                <Button alignSelf='start' icon={<Calendar/>} primary label={DateMapper.toDate(folder.date)} color='accent-4'/>
                <Button margin='small' alignSelf='end' icon={<Deploy/>} label='Переглянути' primary href={'/gallery/'+folder.id}/>
            </Card>
        </Box>
    );
}

export default GalleryFolderPreview;