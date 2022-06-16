import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            newMessageBody: 'new SMS'
        },
        sidebar: {
            friends: [
                {id: 0, name: 'Maxim'},
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Lena'}
            ]
        },
    },
    _collSubscriber() {
        console.log('')
    },
    getState() {
        return this._state
    },


    subscribe(observer) {
        store._collSubscriber = observer

    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)

        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._collSubscriber(this._state)

    }
}


export default store