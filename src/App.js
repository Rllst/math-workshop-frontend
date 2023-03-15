import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import AdminPage from "./components/pages/admin/AdminPage";
import PostPage from "./components/pages/post/PostPage";
import {Grommet} from "grommet";
import WelcomePage from "./components/pages/welcome/WelcomePage";
import GalleryPage from "./components/pages/gallery/GalleryPage";
import GalleryFolderPage from "./components/pages/gallery/GalleryFolderPage";
import LoginPage from "./components/pages/login/LoginPage";
import NewsPage from "./components/pages/news/NewsPage";
import ArchivePage from "./components/pages/archive/ArchivePage";
import ArchiveFolderPage from "./components/pages/archive/ArchiveFolderPage";
import TeamPage from "./components/pages/team/TeamPage";
import EventPage from "./components/pages/event/EventPage";

function App() {

  return (
        <div className="App">
            <Grommet theme={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<WelcomePage/>}/>
                        <Route path="/news" element={<NewsPage/>}/>
                        <Route path="/post/:id" element={<PostPage/> }/>
                        <Route path="/admin" element={<AdminPage/>}/>
                        <Route path="/gallery" element={<GalleryPage/>}/>
                        <Route path="/gallery/:id" element={<GalleryFolderPage/>}/>
                        <Route path="/calendar" element={<EventPage/>}/>
                        <Route path="/archive" element={<ArchivePage/>}/>
                        <Route path="/archive/:id" element={<ArchiveFolderPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/team" element={<TeamPage/>}/>
                    </Routes>
                </BrowserRouter>
            </Grommet>
        </div>
  );
}

export default App;
