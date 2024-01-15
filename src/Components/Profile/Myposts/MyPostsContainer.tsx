import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../state/ProfileReducer";
import {connect} from "react-redux";
import {MyPost} from "./MyPosts";
import {AppRootStateType} from "../../../state/redux-store";
import {ActionType} from "../../../state/State";




type MePostPropsType = {
    // postsData: PostsDataType[]
    // dispatch:(action:ActionType)=>void
    // newPostText: string
}

// export const MyPostContainer = (props: MePostPropsType) => {
//
//     let dispatch = useDispatch()
//     let posts = useSelector<AppRootStateType, PostsType[]>(state=>state.profilePage.postsData)
//
//     const addPost = () => {
//         dispatch(addPostAC())
//     }
//     const onPostChange = (text:string) => {
//         dispatch(updateNewPostTextAC(text))
//     }
//
//     return <MyPost
//         onPostChange={(text:string)=>onPostChange(text)}
//         addPost={addPost}
//         posts={posts}
//     />
// }

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch:(action:ActionType)=>void) => {
    // let dispatch = useDispatch()
    return {
        onPostChange: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostAC())
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)