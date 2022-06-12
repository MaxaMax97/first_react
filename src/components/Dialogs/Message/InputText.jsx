import s from './../Dialogs.module.css'
import React from "react";


const InputText = (props) => {

    let newText = React.useRef()

    let addMessage = () => {

        props.dispatch({type: 'ADD-MESSAGE'})

    }
    const onChangeMessage = () => {
        let text = newText.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            newText: text
        })
    }

    return <div>
        <div>
            <textarea
                onChange={onChangeMessage}
                ref={newText}
                value={props.store._state.messagePage.newMessage}
            />
        </div>
        <div>
            <button onClick={addMessage}>Add text</button>
        </div>
    </div>

}


export default InputText;