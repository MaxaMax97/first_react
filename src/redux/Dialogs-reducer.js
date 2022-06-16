const addMessage = 'SEND-MESSAGE';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState = {
    dialogs: [
        {id: 1, name: 'Maksim'},
        {id: 2, name: 'Nastia'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Igor'}
    ],
    message: [
        {id: 1, message: 'Hi,my name Maksim'},
        {id: 2, message: 'Hi,my name Nastia'},
        {id: 3, message: 'Hi,my name Pasha'},
        {id: 4, message: 'Hi,my name Lera'},
        {id: 5, message: 'Hi,my name Igor'}
    ],
    newMessageBody: 'new SMS'
}
const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {

        case "SEND-MESSAGE":
            let newMess = {
                id: 6, message: state.newMessageBody
            }
            state.message.push(newMess)
            state.newMessageBody = ''

            return state
        case "UPDATE-NEW-MESSAGE-TEXT" :
            state.newMessageBody = action.body

            return state
        default :
            return state
    }

}
export const addMessageActionCreator = () => ({type: addMessage})

export const updateNewMessageTextActionCreator = (body) => ({type: updateNewMessageText, body: body})

export default dialogsReducer
