import {Box, Button, Tab, Tabs} from "grommet";
import PostTab from "./tabs/PostTab";
import {ToastContainer} from "react-toastify";
import CategoryTab from "./tabs/CategoryTab";
import GalleryTab from "./tabs/GalleryTab";
import {useEffect} from "react";
import {
    Announce,
    Article,
    Bookmark,
    Calendar,
    ChatOption,
    Gallery,
    Group,
    Logout,
    Storage,
    UserWorker
} from "grommet-icons";
import AdminTab from "./tabs/AdminTab";
import ArchiveTab from "./tabs/ArchiveTab";
import CommentTab from "./tabs/CommentTab";
import TeamTab from "./tabs/TeamTab";
import QuoteTab from "./tabs/QuoteTab";
import EventTab from "./tabs/EventTab";

const AdminContent = ()=>{
    useEffect(()=>{
        if(!localStorage.getItem('access_token')){
            window.location.href="/login";
        }
    })
    const logout = ()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href="/login";
    }
    return(
        <Box alignSelf='center' pad='xlarge'>
            <ToastContainer/>
            <Tabs>
                <Tab title='Posts' icon={ <Article />}>
                    <PostTab/>
                </Tab>
                <Tab title='Gallery' icon={ <Gallery />}>
                    <GalleryTab/>
                </Tab>
                <Tab title='Archive' icon={<Storage/>}>
                    <ArchiveTab/>
                </Tab>
                <Tab title='Comments' icon={<ChatOption/>}>
                    <CommentTab/>
                </Tab>
                <Tab title='Categories' icon={<Bookmark/>}>
                    <CategoryTab/>
                </Tab>
                <Tab title='Events' icon={<Calendar />}>
                    <EventTab/>
                </Tab>
                <Tab title='Admins' icon={<UserWorker />}>
                    <AdminTab/>
                </Tab>
                <Tab title='Our Team' icon={<Group />}>
                    <TeamTab/>
                </Tab>
                <Tab title='Quotes:)' icon={<Announce/>}>
                    <QuoteTab/>
                </Tab>
                <Tab title="Log out" icon={<Logout/>}>
                    <Box align='center'>
                        <Button primary onClick={logout} label='LogOut'/>
                    </Box>
                </Tab>
            </Tabs>
        </Box>

    )
}

export default AdminContent;