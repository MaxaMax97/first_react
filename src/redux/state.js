import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        post: [
            {id: 1, message: 'I am learning react', likeCount: 24},
            {id: 2, message: 'Thanks Dimych', likeCount: 31},
            {id: 3, message: 'Thanks Maxim', likeCount: 635},
            {id: 4, message: 'You', likeCount: 125}
        ],
        newPostText: 'maxamax'
    },
    messagePage: {
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
        newMessage: 'new SMS'

    },
    sitebar: {
        friends: [
            {id: 0, name: 'Maxim'},
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Lena'}
        ]
    },

}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}


export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    renderEntireTree(state)
}
export let updateNewMessageText = (newText) => {

    state.messagePage.newMessage = newText
    renderEntireTree(state)
}

export let addMessage = () => {

    let newMess = {
        id: 6, message: state.messagePage.newMessage
    }
    state.messagePage.message.push(newMess)
    state.messagePage.newMessage = ''
    renderEntireTree(state)
}


export default state
