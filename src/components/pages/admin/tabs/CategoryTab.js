import CategoryService from "../../../../services/CategoryService";
import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import CategoryForm from "../forms/CategoryForm";

const CategoryTab = () => {
    const [categories, changeHandler] = useApi(CategoryService.getAll);

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
    <BaseTab data={categories} tableColumns={columns} handler={changeHandler} form={CategoryForm}/>
    )
}

export default CategoryTab;