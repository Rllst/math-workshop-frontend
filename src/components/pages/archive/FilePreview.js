import {Box, Button, Text} from "grommet";
import {Document, Download} from "grommet-icons";
import {api} from "../../../Constansts";

const FilePreview = ({file})=>{
    return(
        <Box pad='small' round background='light-4' direction='row'>
            <Document size='medium' color = 'accent-4'/>
            <Box>
                <Text size='large' color='brand'>{file.name}</Text>
                <Text>{file.date}</Text>
            </Box>
            <Box>
               <Button icon={ <Download size='medium' color='brand' />} title='Download' href = {api+'/archive/file/'+file.id}/>
            </Box>
        </Box>
    )
}

export default FilePreview;