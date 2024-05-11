import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img alt={''} src="https://avatars.mds.yandex.net/i?id=1dd689a2061aafd4147897ff59e5ee46e78084ca-9181203-images-thumbs&n=13" />
            <span  className={s.post}>{props.message}</span>
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}