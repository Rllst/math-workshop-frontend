import PageBase from "../../PageBase";
import NewsContent from "./NewsContent";

const NewsPage = ()=>{
    return(<PageBase queryable content={NewsContent}/>);
}

export default NewsPage;