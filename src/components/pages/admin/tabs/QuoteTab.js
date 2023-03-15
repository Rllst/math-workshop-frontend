import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import QuoteService from "../../../../services/QuoteService";
import PostForm from "../forms/PostForm";
import QuoteForm from "../forms/QuoteForm";

const QuoteTab = () => {
    const [quotes, changeHandler] = useApi(QuoteService.getAll);
    const columns = [
        {
            property:"id",
            header: "Id"
        },
        {
            property: "author",
            header: "Author"
        },
        {
            property: "content",
            header: "Content"
        },
    ]
    return (
        <BaseTab data={quotes} tableColumns={columns} handler ={changeHandler} form={QuoteForm}/>
    )
}

export default QuoteTab;