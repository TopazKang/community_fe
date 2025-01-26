import React, { useState } from 'react';
import styled from 'styled-components';
import { API } from '../../apis/routes';
import { Edit, Close } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';

const CommentBox = styled.div`
    width: 612px;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: gray;
    border-radius: 10px;
    margin-bottom: 10px;
`
const CommentText = styled.div`
    width: 500px;
    height: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const CommentInfo = styled.div`
    width: 534px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const CommentDate = styled.div`
    width: 200px;
    color: lightgray;
    font-size: 16px;
`
const CommentWriter = styled.div`
    width: 100px;
    height: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
const CommentWriterImage = styled.div`
    width: 27px;
    height: 27px;
    border-radius: 50px;
    background-color: lightgray;
    margin-right: 5px;
`
const CommentWriterText = styled.div`
    font-size: 16px;
    margin-left: 4px; 
`
const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 534px;
    justify-content: space-between;
    align-items: center;
`
const Cancel = styled.div`
    height: 72px;
`
const RowBox = styled.div`
    width: 602px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export default function Comment({ id, isOwner, comment, date, profileImagePath, nickname, reload }) {

    const [edit, setEdit] = useState(false);
    const [modified, setModified] = useState(comment);

    async function deleteComment() {
        const token = localStorage.getItem('accessToken');

        try {
            const response = await fetch(API.COMMENT + id, {
                method: "DELETE",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                console.log("댓글 삭제 성공")
                reload();
            }
            else {
                console.log("댓글 삭제 실패")
                alert("댓글 삭제 실패")
            }
        }
        catch (err) {
            console.log("댓글 삭제 오류 발생", err)
        }
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleComment = (text) => {
        setModified(text);
    }

    async function modifyComment() {
        const token = localStorage.getItem('accessToken');

        try {
            const response = await fetch(API.COMMENT + id, {
                method: "PUT",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: modified
            })

            if (response.ok) {
                console.log("댓글 수정정 성공")
                handleEdit();
                reload();
            }
            else {
                console.log("댓글 수정 실패")
                alert("댓글 수정 실패")
            }
        }
        catch (err) {
            console.log("댓글 수정 오류 발생", err)
        }
    }

    return (
        <>
            {
                edit ?
                    <CommentBox>
                        <TextField
                            multiline
                            rows={2}
                            value={modified}
                            sx={{ width: "602px", marginTop: "5px", backgroundColor: 'white', borderRadius: "5px" }}
                            onChange={(e) => { handleComment(e.target.value) }}
                        />
                        <RowBox>
                            <Button onClick={handleEdit} variant='contained' sx={{ width: "114px", height: "31px", color: "black", backgroundColor: '#f59daa', borderRadius: "10px", margin: "4px" }}>취소</Button>
                            <Button onClick={modifyComment} variant='contained' sx={{ width: "114px", height: "31px", color: "black", backgroundColor: "#aff0fa", borderRadius: "10px", margin: "4px" }}>수정</Button>
                        </RowBox>
                    </CommentBox>
                    :
                    <CommentBox>
                        < HeaderBox >
                            <CommentText>{comment}</CommentText>
                            {isOwner &&
                                <>
                                    <Cancel onClick={handleEdit}>
                                        <Edit sx={{ width: '30px', height: '30px', marginTop: "20px" }} />
                                    </Cancel>
                                    <Cancel onClick={deleteComment}>
                                        <Close sx={{ width: '30px', height: '30px', marginTop: "20px" }} />
                                    </Cancel>
                                </>
                            }

                        </HeaderBox >
                        <CommentInfo>
                            <CommentDate>{date}</CommentDate>
                            <CommentWriter>
                                <CommentWriterImage style={{ backgroundImage: `url(${API.BASE_URL + profileImagePath})`, backgroundSize: "cover" }} />
                                <CommentWriterText>{nickname}</CommentWriterText>
                            </CommentWriter>
                        </CommentInfo>
                    </CommentBox >
            }
        </>


    )
}