import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import ImgFreinds from "../Profile/ProfileInfo/img";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={x => x.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={x => x.isActive ? s.active : s.item}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={x => x.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={x => x.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className={x => x.isActive ? s.active : s.item}>Setting</NavLink>
            </div>
            <div className={s.item}>
                <div className={x => x.isActive ? s.active : s.item}>Friends</div>
                <ImgFreinds/>
                <ImgFreinds/>
                <ImgFreinds/>
            </div>

        </nav>
    );
};
export default Navbar;

