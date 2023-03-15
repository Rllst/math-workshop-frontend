import HeaderElement from "./HeaderElement";
import {useState} from "react";
import FooterElement from "./FooterElement";
import {Page, PageContent} from "grommet";
import {ToastContainer} from "react-toastify";
import useLoader from "../hooks/useLoader";
import instance from "../services/api";
import Loader from "./pages/Loader";

const PageBase = ({content, queryable})=>{
    const [query, setQuery] = useState();
    const [isLoading] = useLoader(instance);
    const Content = content;
    return(
            <Page kind='wide' background={
                {
                    image: 'url(https://as2.ftcdn.net/v2/jpg/00/97/74/49/1000_F_97744976_s1aK5h2VdjnhK5hbUe8X0hKH7OCVejyM.jpg)'
                }
            }>
                <HeaderElement onQueryChange={queryable ? setQuery : null}/>
                <ToastContainer/>
                {isLoading && <Loader/>}
                <PageContent background='light-3' border height={
                    {
                        min:'xlarge'
                    }
                }>
                    <Content query = {queryable ? query : null}/>
                </PageContent>
                <FooterElement/>
            </Page>
    )
}

export default PageBase;