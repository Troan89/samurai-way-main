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

