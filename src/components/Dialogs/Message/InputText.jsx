import s from './../Dialogs.module.css'
import React from "react";


const InputText = (props) => {

    let newText = React.useRef()

    let clic = () => {

        props.store.createMessage.addMessage()

    }
    const onChangeMessage = () => {
        let text = newText.current.value;
        props.store.createMessage.updateNewMessageText(text)
    }

    return <div>
        <div>
            <textarea
                onChange={onChangeMessage}
                ref={newText}
                value={props.store.state.messagePage.newMessage}
            />
        </div>
        <div>
            <button onClick={clic}>Add text</button>
        </div>
    </div>

}


export default InputText;