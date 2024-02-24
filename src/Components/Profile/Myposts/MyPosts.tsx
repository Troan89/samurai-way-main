import React from "react";
import {PostsType} from "../../../state/State";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {FormPost} from "./FormPost";

type MePostPropsType = {
    posts: PostsType[]
}

export const MyPost = (props: MePostPropsType) => {
    let postsElement = props.posts.map((post, index) => <Post key={index} message={post.message} like={post.like}/>)
    console.log('fuck')
    return (
        <div className={s.postsBlock}>
            My post
            <FormPost />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


//
// import React, {ChangeEvent, useState} from "react";
// import { addPostAC, updateNewPostTextAC } from "../../../state/profileReducer";
// import {ActionType, PostsType, ProfilePageType,} from "../../../state/State";
// import s from './MyPosts.module.css'
// import {Post} from "./Post/Post";
// import {useDispatch, useSelector} from "react-redux";
// import {AppRootStateType} from "../../../state/redux-store";
//
//
//
// export type PostsDataType = {
//     id: string
//     message: string
//     like: number
// }
// type MePostPropsType = {
//     // postsData: PostsDataType[]
//     // dispatch:(action:ActionType)=>void
//     // newPostText: string
// }
//
// export const MyPost = (props: MePostPropsType) => {
//     const [postText, setPostText] = useState<string>('')
//
//     let dispatch = useDispatch()
//     let posts = useSelector<AppRootStateType, PostsType[]>(state=>state.profilePage.postsData)
//
//     // let postsElement = props.postsData.map((post, index) => <Post key={index} message={post.message} like={post.like}/>)
//     let postsElement = posts.map((post, index) => <Post key={index} message={post.message} like={post.like}/>)
//
//     const addPost = () => {
//         // props.dispatch(addPostAC())
//         dispatch(addPostAC())
//         setPostText('')
//     }
//     const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         setPostText(e.currentTarget.value)
//         // props.dispatch(updateNewPostTextAC(postText))
//         dispatch(updateNewPostTextAC(postText))
//     }
//
//     return (
//         <div className={s.postsBlock}>
//             My post
//             <div>
//                 <div>
//                     <textarea
//                         value={postText}
//                         onChange={onPostChange}
//                     />
//                 </div>
//                 <div>
//                     <button onClick={addPost}>Добавить пост</button>
//                 </div>
//             </div>
//             <div className={s.posts}>
//                 {postsElement}
//             </div>
//         </div>
//     )
// }