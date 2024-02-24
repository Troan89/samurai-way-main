import {addPost, deletePost, ProfileReducer} from "./ProfileReducer";


let state = {
    postsData: [
        {id: "1", message: "Hi, people", like: 14},
        {id: "2", message: "Bye, people", like: 1},
        {id: "3", message: "Yo", like: 0},
    ],
    profile: null,
    status: "",
}

describe('profile-reducer', () => {
    it('new post should be incremented', () => {
        let action = addPost('Ivan')
        let newState = ProfileReducer(state, action)

        expect(newState.postsData.length).toBe(4)
    })
    it('message of new post should be Ivan ', () => {
        let action = addPost('Ivan')
        let newState = ProfileReducer(state, action)

        expect(newState.postsData[0].message).toBe("Ivan")
    })
    it('id of new post should be 4', () => {
        let action = addPost('Ivan')
        let newState = ProfileReducer(state, action)

        expect(newState.postsData[0].id).toBe("4")
    })
    it('like new post should be 0', () => {
        let action = addPost('Ivan')
        let newState = ProfileReducer(state, action)

        expect(newState.postsData[0].like).toBe(0)
    })

    it('after deleting length of messages should be decrement', () => {
        let action = deletePost('1')
        let newState = ProfileReducer(state, action)

        expect(newState.postsData.length).toBe(2)
    })
    it('after deleting length of messages should be decrement if id is incorrect', () => {
        let action = deletePost('1000')
        let newState = ProfileReducer(state, action)

        expect(newState.postsData.length).toBe(3)
    })
})
