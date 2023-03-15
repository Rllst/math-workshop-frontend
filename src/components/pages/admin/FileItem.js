import {Box, Button, Text} from "grommet";
import {RadialSelected, Trash} from "grommet-icons";
import ArchiveService from "../../../services/ArchiveService";

const FileItem = ({file}) =>{
    const remove = ()=>ArchiveService.removeFile(file.id);
    return(
        <Box direction='row' pad='small'>
            <RadialSelected color='gold'/>
            <Trash onClick={remove}/>
            <Text>{file.name}</Text>
        </Box>
    )
}

export default FileItem;