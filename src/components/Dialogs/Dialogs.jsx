import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    /*    const dialogs = [
            {id: 1, name: 'Maksim'},
            {id: 2, name: 'Nastia'},
            {id: 3, name: 'Pasha'},
            {id: 4, name: 'Lera'},
            {id: 5, name: 'Igor'}
        ] // Array object dialogs
        const messages = [
            {id: 1, message: 'Hi,my name Maksim'},
            {id: 2, message: 'Hi,my name Nastia'},
            {id: 3, message: 'Hi,my name Pasha'},
            {id: 4, message: 'Hi,my name Lera'},
            {id: 5, message: 'Hi,my name Igor'}
        ] // Array object messages*/

    let dialogsElements = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //  function map
    let messagesElements = props.data.messageAll.map(m => <Message message={m.message}/>)         // function map
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};


export default Dialogs;