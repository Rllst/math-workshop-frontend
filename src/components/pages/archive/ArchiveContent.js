import {Grid, Text} from "grommet";
import GalleryFolderPreview from "../gallery/GalleryFolderPreview";
import ArchiveService from "../../../services/ArchiveService";
import useApi from "../../../hooks/useApi";
import ArchiveFolderPreview from "./ArchiveFolderPreview";

const ArchiveContent =  ()=>{
    const [folders] = useApi(ArchiveService.getAll);
    return(
        <Grid pad='small' gap='small' columns='medium'>
            {folders?.map(f=><ArchiveFolderPreview folder={f}/>)}
        </Grid>
    )
}

export default ArchiveContent;