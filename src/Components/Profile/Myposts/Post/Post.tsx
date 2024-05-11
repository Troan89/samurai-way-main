import React from "react";
import s from './Post.module.css'
import {useAppDispatch, useAppSelector} from "../../../../state/redux-store";
import {decrementLike, incrementLike} from "../../../../state/ProfileReducer";

type PostPropsType = {
    message: string
    like: number
    id: string
}

export const Post = (props: PostPropsType) => {

    const dispatch = useAppDispatch()
    debugger
    return (
        <div className={s.item}>
            <img alt={''}
                 src="https://avatars.mds.yandex.net/i?id=1dd689a2061aafd4147897ff59e5ee46e78084ca-9181203-images-thumbs&n=13"/>
            <span className={s.post}>{props.message}</span>
            <div>
                <button onClick={() => {
                    dispatch(incrementLike(props.id))
                }}>+
                </button>
                <span>{props.like}</span>
                <button onClick={() => {
                    dispatch(decrementLike(props.id))
                }}>-
                </button>
            </div>
        </div>
    )
}