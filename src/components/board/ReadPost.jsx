import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { API } from '../../apis/routes';
import DOMPurify from 'dompurify';
import Comment from './Comment';
import { Edit, Close } from '@mui/icons-material';
import CreatePost from './CreatePost';
import { useNavigate } from 'react-router-dom';

const MainDiv = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: auto;
`
const PostBox = styled.div`
    width: 666px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleBox = styled.div`
    width: 666px;
    height: 117px;
    margin-bottom: 18px;
`
const TitleInfoBox = styled.div`
    width: 666px;
    height: 40px;
    display: flex;
    flex-direction: row;
`
const TitleInfo = styled.div`
    width: 300px;
    height: 37px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const ImageBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: gray;
`
const Writer = styled.div`
    font-size: 16px;
`
const Date = styled.div`
    font-size: 12px;
    color: gray;
`
const Line = styled.hr`
    width: 667px;
    border-bottom: 1px;
    border-color: black;
`
const Content = styled.div`
    margin-top: 22px;
    margin-bottom: 22px;
    max-width: 612px;
    word-wrap: break-word;
`
const CommentBox = styled.div`
    width: 612px;
    margin-bottom: 30px;
`
const CommentInputBox = styled.div`
    width: 612px;
    height: 120px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
`
const CommentInput = styled.input`
    width: 598px;
    height: 70px;
    margin: 4px;
    border-radius: 10px;
`
const CommentButton = styled.div`
    width: 114px;
    height: 31px;
    background-color: lightblue;
    margin-left: 488px;
    border-radius: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
`
const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 666px;
    justify-content: space-between;
    align-items: center;
`
const Cancel = styled.div`
`
const RowBox = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`



export default function ReadPost() {

    // 초기 데이터 로딩을 위한 상태
    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);
    const { post_id } = useParams();
    const [isOwner, setIsOwner] = useState(false);

    // 댓글 작성 및 리로드를 위한 상태
    const [state, setState] = useState(true);
    const valueRef = useRef("");

    // 게시글 수정을 위한 상태
    const [modify, setModify] = useState(false);

    // 네비게이션(페이지 이동)
    const navigate = useNavigate();


    useEffect(() => {
        getData();
    }, [post_id, state])

    // 초기 데이터 로딩 fetch
    async function getData() {

        const token = localStorage.getItem("accessToken");
        let header = {}
        if(token){
            header = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }

        try {
            const response = await fetch(API.POST + post_id, {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: header,
            })

            if (response.ok) {
                console.log("게시글 조회 성공")
                const datas = await response.json();
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

    const submitComment = () => {
        postComment();
    }

    // 댓글 작성 fetch
    async function postComment() {

        const token = localStorage.getItem("accessToken");

        try {
            const response = await fetch(API.COMMENT + post_id, {
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
                reload();
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

    // 데이터 리로드
    const reload = () => {
        setState(!state);
    }

    // 게시물 수정
    const handleModify = () => {
        setModify(!modify);
    }

    // 게시글 삭제 fetch
    async function deletePost() {
        const token = localStorage.getItem('accessToken');

        try {
            const response = await fetch(API.POST + post_id, {
                method: "DELETE",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                console.log("게시글글 삭제 성공")
                navigate("/");
            }
            else {
                console.log("게시글 삭제 실패")
                alert("게시글 삭제 실패")
            }
        }
        catch (err) {
            console.log("게시글 삭제 오류 발생", err)
        }
    }

    return (
        <>
            {modify ?
                <CreatePost origin={data} method={handleModify} reload={reload} />
                :
                <MainDiv>
                    <PostBox>
                        <TitleBox>
                            <HeaderBox>
                                <h2>{data.postTitle}</h2>
                                {data.isOwner &&
                                    <RowBox>
                                        <Cancel onClick={handleModify}>
                                            <Edit sx={{ width: '30px', height: '30px', marginTop: "20px" }} />
                                        </Cancel>
                                        <Cancel onClick={deletePost}>
                                            <Close sx={{ width: '30px', height: '30px', marginTop: "20px" }} />
                                        </Cancel>
                                    </RowBox>
                                }
                            </HeaderBox>
                            <TitleInfoBox>
                                <ImageBox style={{ backgroundImage: `url(${API.BASE_URL + data.userImage})`, backgroundSize: 'cover' }} />
                                <TitleInfo>
                                    <Writer>{data.userNickname}</Writer>
                                    <Date>{data.postCreatedAt}</Date>
                                </TitleInfo>
                            </TitleInfoBox>
                        </TitleBox>
                        <Line />
                        <Content dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.postContent) }} />
                        <Line />
                    </PostBox>
                    <CommentBox>
                        <CommentInputBox>
                            <CommentInput ref={valueRef} />
                            <CommentButton onClick={submitComment}>댓글 작성</CommentButton>
                        </CommentInputBox>
                        {comments.map((comment) => (<Comment key={`${comment.commentId}-${comment.commentCreatedAt}`} id={comment.commentId} isOwner={comment.isOwner} comment={comment.comment} date={comment.commentCreatedAt} profileImagePath={comment.userImage} nickname={comment.userNickname} reload={reload} />))}
                    </CommentBox>
                </MainDiv>
            }
        </>

    )
}

// 입력한거 로컬에 넣어두고 있으면 보여주고 아니면 빈칸으로 만드는 로직 추가할것.