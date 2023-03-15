import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import CommentService from "../../../../services/CommentService";
import CommentForm from "../forms/CommentForm";

const CommentTab = () => {
    const [comments, changeHandler] = useApi(CommentService.getAll);
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
            header: "Email"
        },
        {
            property: "content",
            header: "Content"
        },
        {
            property: "date",
            header: "Date"
        }
    ]
    return (
        <BaseTab data={comments} tableColumns={columns} handler ={changeHandler} form={CommentForm}/>
    )
}

export default CommentTab;