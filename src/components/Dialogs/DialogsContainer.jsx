import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator())
    }
    const omNewMessageChange = (body) => {


        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
        <Dialogs udateNewMessageBody={omNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}


        />
    );
};


export default DialogsContainer;