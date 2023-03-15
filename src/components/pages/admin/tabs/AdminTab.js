import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import AdminService from "../../../../services/AdminService";
import AdminForm from "../forms/AdminForm";

const AdminTab = () => {
    const [admins, changeHandler] = useApi(AdminService.getAll);
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
            property: "email",
            header: "email"
        }
    ]
    return (
        <BaseTab data={admins} tableColumns={columns} handler ={changeHandler} form={AdminForm}/>
    )
}

export default AdminTab;