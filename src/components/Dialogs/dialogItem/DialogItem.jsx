import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let patch = `/dialogs/${props.id}`

    return (

        <div className={s.dialog}>
            <NavLink className={x => x.isActive ? s.active : s.linka} to={patch}>{props.name}</NavLink>
        </div>
    )
    
};
export default DialogItem