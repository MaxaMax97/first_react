import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/Dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().messagePage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //  function map
    let messagesElements = state.message.map(m => <Message message={m.message}/>)         // function map
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {

        props.store.dispatch(addMessageActionCreator())
    }
    const omNewMessageChange = (e) => {
        let body = e.target.value;


        props.store.dispatch(updateNewMessageTextActionCreator(body))

    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div><textarea value={newMessageBody} onChange={omNewMessageChange}/></div>
                <div>
                    <button onClick={onSendMessageClick}>add sms</button>
                </div>


            </div>
        </div>
    );
};


export default Dialogs;