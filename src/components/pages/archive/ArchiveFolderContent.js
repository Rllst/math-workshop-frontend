import ArchiveService from "../../../services/ArchiveService";
import useApi from "../../../hooks/useApi";
import {useParams} from "react-router-dom";
import {Box} from "grommet";
import FilePreview from "./FilePreview";

const ArchiveFolderContent = ()=>{
    const {id} = useParams();
    const [folder] = useApi(ArchiveService.get,id);
    return(
        <Box gap='small'>
            {folder.files?.map(f=><FilePreview file={f}/>)}
        </Box>
    )
}

export default ArchiveFolderContent;