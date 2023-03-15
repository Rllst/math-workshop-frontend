import GalleryService from "../../../services/GalleryService";
import useApi from "../../../hooks/useApi";
import GalleryFolderPreview from "./GalleryFolderPreview";
import {Grid} from "grommet";

const GalleryContent = ()=>{
    const [folders,] = useApi(GalleryService.getAll);
    return (
        <Grid pad='small' gap='small' columns='medium'>
            {folders?.map(f=><GalleryFolderPreview folder={f}/>)}
        </Grid>
    )
}

export default GalleryContent;