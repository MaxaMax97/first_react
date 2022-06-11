import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import InputText from './Message/InputText'


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //  function map
    let messagesElements = props.dialogs.message.map(m => <Message message={m.message}/>)         // function map

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <InputText newMessage={props.dialogs}
                           addMessasge={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}/>
            </div>
        </div>
    );
};


export default Dialogs;