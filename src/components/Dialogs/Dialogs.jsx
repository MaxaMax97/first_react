import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import InputText from './Message/InputText'


const Dialogs = (props) => {

    let dialogsElements = props.store._state.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //  function map
    let messagesElements = props.store._state.messagePage.message.map(m => <Message message={m.message}/>)         // function map

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <InputText dispatch={props.dispatch} store={props.store}
                />
            </div>
        </div>
    );
};


export default Dialogs;