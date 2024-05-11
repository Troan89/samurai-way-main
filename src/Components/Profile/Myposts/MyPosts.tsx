import React from "react";
import {PostsType} from "../../../state/State";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {FormPost} from "./FormPost";
import {useAppSelector} from "../../../state/redux-store";

type MePostPropsType = {
    posts: PostsType[]
}

export const MyPost = (props: MePostPropsType) => {
    const posts = useAppSelector(state=>state.profilePage.postsData)
    debugger
    let postsElement = posts.map((post, index) => <Post key={index} id={post.id} message={post.message} like={post.like}/>)
    return (
        <div className={s.postsBlock}>
            Мои посты
            <FormPost />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

