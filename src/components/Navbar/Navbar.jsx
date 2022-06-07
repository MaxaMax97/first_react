import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>link</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Setting</a>
            </div>
        </nav>
    );
};
export default Navbar;

