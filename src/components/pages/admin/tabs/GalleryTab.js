import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import GalleryService from "../../../../services/GalleryService";
import GalleryForm from "../forms/GalleryForm";

const GalleryTab = () => {
    const [folders, changeHandler] = useApi(GalleryService.getAll);
    const columns = [
        {
            property:"id",
            header: "Id"
        },
        {
            property: "name",
            header: "Name"
        },
        {
            property: "description",
            header: "Description"
        },
        {
            property: "date",
            header: "Date"
        }
    ]
    return (
        <BaseTab data={folders} tableColumns={columns} handler ={changeHandler} form={GalleryForm}/>
    )
}

export default GalleryTab;