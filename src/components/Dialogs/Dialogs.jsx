import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import InputText from './Message/InputText'


const Dialogs = (props) => {

    let dialogsElements = props.store.state.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //  function map
    let messagesElements = props.store.state.messagePage.message.map(m => <Message message={m.message}/>)         // function map

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <InputText store={props.store}
                />
            </div>
        </div>
    );
};


export default Dialogs;