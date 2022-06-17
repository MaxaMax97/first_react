const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const addPost = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'I am learning react', likeCount: 24},
        {id: 2, message: 'Thanks Dimych', likeCount: 31},
        {id: 3, message: 'Thanks Maxim', likeCount: 635},
        {id: 4, message: 'You', likeCount: 125}
    ],
    newPostText: 'New Post'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text})
export const addPostActionCreator = () => ({type: addPost})

export default profileReducer