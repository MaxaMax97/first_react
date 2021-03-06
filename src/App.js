import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (<div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer store={props.store}/>}/>
                    <Route path="/profile"
                           element={<Profile store={props.store}/>}/>
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

}


export default App;
