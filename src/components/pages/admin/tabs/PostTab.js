import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import PostService from "../../../../services/PostService";
import PostForm from "../forms/PostForm";

const PostTab = () => {
    const [posts, changeHandler] = useApi(PostService.getAll);
    const columns = [
        {
            property:"id",
            header: "Id"
        },
        {
            property: "title",
            header: "Title"
        },
        {
            property: "description",
            header: "Description"
        },
        {
            property: "date",
            header: "Date"
        },
        {
            property: "views",
            header: "Views"
        },

    ]
    return (
        <BaseTab data={posts} tableColumns={columns} handler ={changeHandler} form={PostForm}/>
    )
}



export default PostTab;