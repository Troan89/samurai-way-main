import React from "react";
import s from './Post.module.css'
import {useAppDispatch, useAppSelector} from "../../../../state/redux-store";
import {decrementLike, incrementLike} from "../../../../state/ProfileReducer";
import styled from "styled-components";
import like from '../../../../assets/like.jpg'
import dislike from '../../../../assets/dislike.jpg'

type PostPropsType = {
    message: string
    like: number
    id: string
}

export const Post = (props: PostPropsType) => {

    const dispatch = useAppDispatch()

    return (
        <div className={s.item}>
            <img className={s.avatar} alt={''}
                 src="https://avatars.mds.yandex.net/i?id=1dd689a2061aafd4147897ff59e5ee46e78084ca-9181203-images-thumbs&n=13"/>
            <span className={s.post}>{props.message}</span>
            <div className={s.blockLikeDislike}>
                <LikeDislikeButton onClick={() => {
                    dispatch(incrementLike(props.id))
                }}><LikeIcon src={like} alt="Like"/>
                </LikeDislikeButton>
                <span>{props.like}</span>
                <LikeDislikeButton onClick={() => {
                    dispatch(decrementLike(props.id))
                }}><LikeIcon src={dislike} alt={"Dislike"} />
                </LikeDislikeButton>
            </div>
        </div>
    )
}

const LikeDislikeButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: block;
`

const LikeIcon = styled.img`
    width: 30px;
    height: 20px;
    border-radius: 99999px;
    transition: transform 0.2s; /* Добавляем плавный переход при изменении масштаба */

    ${LikeDislikeButton}:hover & {
        transform: scale(1.2); /* Увеличиваем картинку при наведении */
    }
    ${LikeDislikeButton}:active & {
        transform: scale(0.8); /* Увеличиваем картинку при наведении */
    }
`