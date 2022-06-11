import s from './../Dialogs.module.css'
import React from "react";
import {updateNewMessageText} from "../../../redux/state";


const InputText = (props) => {

    let newText = React.useRef()

    let clic = () => {

        props.addMessasge()

    }
    const onChangeMessage = () => {
        let text = newText.current.value;
        updateNewMessageText(text)
    }

    return <div>
        <div>
            <textarea
                onChange={onChangeMessage}
                ref={newText}
                value={props.newMessage.newMessage}
            />
        </div>
        <div>
            <button onClick={clic}>Add text</button>
        </div>
    </div>

}


export default InputText;