import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GalleryService from "../../../services/GalleryService";
import useApi from "../../../hooks/useApi";
import {Box, Button, Grid, Image, Layer} from "grommet";
import ImagePreview from "./ImagePreview";
import {api} from "../../../Constansts";
import {LinkPrevious} from "grommet-icons";

const GalleryFolderContent = ()=>{
    const {id} = useParams();
    const [folder, ] = useApi(GalleryService.get, id);
    const [currentImageId, setCurrentImageId] = useState(null);
    const [viewActive, setViewActive] = useState(false);


    const handleClick = (id)=>{
        setCurrentImageId(id);
        setViewActive(true);
    }
    return(
        <Box background='light-4'>
            <Button alignSelf='start' href='/gallery' primary margin='small'  icon={<LinkPrevious/>} label='Повернутись в галегею'/>
            <Grid pad='small' columns='medium' gap='small'>
                {folder.images?.map((i)=><ImagePreview id={i.id} handleClick={handleClick}/>)}
            </Grid>
            {viewActive &&
                <Box overflow='auto'>
                    <Layer onClickOutside={()=>setViewActive(false)}>
                        <Box overflow='auto' border

                             width={
                            {
                                width:"xxlarge",
                                max: 'xxlarge'
                            }
                        }>
                            <Image src={api+'/gallery/image/'+currentImageId}/>
                         </Box>
                    </Layer>
                </Box>
            }
        </Box>
    )
}

export default GalleryFolderContent;