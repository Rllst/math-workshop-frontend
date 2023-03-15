import {Box, Button, Image} from "grommet";
import {Close} from "grommet-icons";
import {api} from "../../../Constansts";
import GalleryService from "../../../services/GalleryService";

const ImageItem = ({id}) => {
    const deleteImage = () =>GalleryService.removeImage(id);

    return (
        <Box width='small' round='medium' background='status-unknown'>
            <Image src={api+'/gallery/image/'+id}/>
            <Button onClick={deleteImage} icon={<Close  color='status-error'/>}/>
        </Box>
    );
}
export default ImageItem;