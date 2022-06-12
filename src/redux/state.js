let store = {
    state: {
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
    },
    createPost: {
        addPost: () => {
            let newPost = {
                id: 5,
                message: store.state.profilePage.newPostText,
                likeCount: 0
            }
            store.state.profilePage.post.push(newPost)
            store.state.profilePage.newPostText = ''
            store.upDate.renderEntireTree(store.state)
        },
        updateNewPostText: (newText) => {

            store.state.profilePage.newPostText = newText
            store.upDate.renderEntireTree(store.state)
        },
    },
    createMessage: {
        addMessage: () => {
            let newMess = {
                id: 6, message: store.state.messagePage.newMessage
            }
            store.state.messagePage.message.push(newMess)
            store.state.messagePage.newMessage = ''
            store.upDate.renderEntireTree(store.state)
        },
        updateNewMessageText: (newText) => {
            store.state.messagePage.newMessage = newText
            store.upDate.renderEntireTree(store.state)
        },
    },
    upDate: {
        renderEntireTree: () => {
            console.log('')
        },
        subscribe: (observer) => {
            store.upDate.renderEntireTree = observer
        }
    }
}
export default store