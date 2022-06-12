let store = {
    _state: {
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
    get_state() {
        return this._state
    },
    upDate: {
        _collSubscriber() {
            console.log('')
        },
        subscribe(observer) {
            store.upDate._collSubscriber = observer
        }
    },
    dispatch(action) {

        switch (action.type) {
            case "ADD-POST":
                let newPost = {
                    id: 5,
                    message: store._state.profilePage.newPostText,
                    likeCount: 0
                }
                store._state.profilePage.post.push(newPost)
                store._state.profilePage.newPostText = ''
                store.upDate._collSubscriber(store._state)
                break;
            case "UPDATE-NEW-POST-TEXT":
                store._state.profilePage.newPostText = action.newText
                store.upDate._collSubscriber(store._state)
                break;
            case "ADD-MESSAGE":
                let newMess = {
                    id: 6, message: store._state.messagePage.newMessage
                }
                store._state.messagePage.message.push(newMess)
                store._state.messagePage.newMessage = ''
                store.upDate._collSubscriber(store._state)
                break;
            case "UPDATE-NEW-MESSAGE-TEXT" :
                store._state.messagePage.newMessage = action.newText
                store.upDate._collSubscriber(store._state)
                break;
        }

    }

}
window.store = store
export default store