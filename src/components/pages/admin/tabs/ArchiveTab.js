import BaseTab from "./BaseTab";
import ArchiveService from "../../../../services/ArchiveService";
import useApi from "../../../../hooks/useApi";
import ArchiveForm from "../forms/ArchiveForm";

const ArchiveTab = () => {
    const [folders, changeHandler] = useApi(ArchiveService.getAll);
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
        }
    ]
    return (
        <BaseTab data={folders} tableColumns={columns} handler ={changeHandler} form={ArchiveForm}/>
    )
}

export default ArchiveTab;