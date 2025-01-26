import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Close, Style } from '@mui/icons-material';
import ModalReply from './ModalReply';
import { API } from '../../apis/routes';
import { TextField, Button } from '@mui/material';

const Div = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
const MainDiv = styled.div`
    width: 1000px;
    height: 625px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid;
`
const LeftSection = styled.div`
    width: 650px;
    height: 625px;
    background-color: black;
    row-gap: 15px;
`
const RightSection = styled.div`
    width: 350px;
    height: 625px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: white;
    justify-content: space-between;
    padding: 0;
`
const Cancel = styled.div`
    width: 340px;
    height: 10px;
    margin-right: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: end;
`
const ReplysBox = styled.div`
    width: 320px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    row-gap: 15px;
    overflow-y: auto;
`
const ReplyInputBox = styled.div`
    width: 320px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const InfoBox = styled.div`
    width: 307px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 21px;
    background-color: lightgray;
`
const InfoFirst = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
`
const InfoTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const InfoDate = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: gray;
`
const InfoContent = styled.div`
    font-size: 16px;
    font-weight: bold;
`
const InfoNums = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
`
const InfoNum = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: gray;
`

export default function ContentModal({ closeModal, id }) {

    const [data, setData] = useState();
    const [comments, setComments] = useState([]);
    const [state, setState] = useState(true);
    const valueRef = useRef("");

    useEffect(() => {
        getData();
    }, [id, state])

    async function getData() {
        try {
            const response = await fetch(API.VOTE + id, {
                method: "GET",
                mode: "cors",
                credentials: "include",
            })

            if (response.ok) {
                console.log("게시글 조회 성공")
                const datas = await response.json();
                console.log(datas)
                setData(datas);
                setComments(datas.comments);
            }
            else {
                console.log("게시글 조회 실패")
            }
        }
        catch (err) {
            console.log("게시글 조회 오류 발생", err)
        }
    }

    const handleComment = () => {
        postComment();
    }

    async function postComment() {
        const token = localStorage.getItem("accessToken");

        try {
            const response = await fetch(API.VOTE_COMMENT + id, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: valueRef.current.value
            })

            if (response.ok) {
                console.log("댓글 작성 성공")
                setState(!state);
                valueRef.current.value = "";
            }
            else {
                console.log("댓글 작성 실패")
            }
        }
        catch (err) {
            console.log("댓글 작성 오류 발생", err)
        }
    }

    return (
        <Div>
            {data ?
                <MainDiv>
                    <LeftSection><img src={API.BASE_URL + data.postImagePath} style={{ width: "650px", height: "625px" }} /></LeftSection>
                    <RightSection>
                        <Cancel onClick={closeModal}>
                            <Close sx={{ width: '30px', height: '30px' }} />
                        </Cancel>
                        <ReplysBox>
                            {comments.map((comment) => <ModalReply replyText={comment.comment} replyDate={comment.createdAt} replyWriter={comment.userNickname} replyImage={API.BASE_URL+comment.userProfileImagePath} />)}
                        </ReplysBox>
                        <ReplyInputBox>
                            <TextField
                                inputRef={valueRef}
                                label="댓글"
                                multiline
                                rows={2}
                                sx={{ width: "230px" }}
                            />
                            <Button variant='contained' onClick={handleComment} sx={{width: "80px", height: "79px"}} >작성</Button>
                        </ReplyInputBox>

                        <InfoBox>
                            <InfoFirst>
                                <InfoTitle>{data.postTitle}</InfoTitle>
                                <InfoDate>{data.createdAt}</InfoDate>
                            </InfoFirst>
                            <InfoContent>{data.postContent}</InfoContent>
                            <InfoNums>
                                <InfoNum>조리개: {data.aperture}</InfoNum>
                                <InfoNum>셔터 스피드: {data.shutter}</InfoNum>
                                <InfoNum>감도: {data.iso}</InfoNum>
                                <InfoNum>W/B: {data.whitebalance}</InfoNum>
                            </InfoNums>
                        </InfoBox>
                    </RightSection>
                </MainDiv>
                :
                <></>
            }
        </Div>
    )
}