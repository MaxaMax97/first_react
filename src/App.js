import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Navbar/Friends/Freinds"
import {updateNewMessageText} from "./redux/state";


const App = (props) => {

    return (<div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogs={props.state.messagePage}
                                             addMessage={props.addMessage}
                                             updateNewMessageText={updateNewMessageText}/>}/>
                    <Route path="/profile"
                           element={<Profile updateNewPostText={props.updateNewPostText}
                                             post={props.state.profilePage}
                                             addPost={props.addPost}/>}/>
                    <Route path="/music"
                           element={<Music/>}/>
                    <Route path="/news"
                           element={<News/>}/>
                    <Route path="/setting"
                           element={<Setting/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;
