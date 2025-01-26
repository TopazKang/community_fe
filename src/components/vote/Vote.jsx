import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Edit, HowToVote } from "@mui/icons-material";
import VoteCard from './VoteCard';
import ContentModal from './ContentModal';
import { useNavigate } from 'react-router-dom';
import { API } from '../../apis/routes';

const MainDiv = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
//  바디
const BodyBox = styled.div`
    width: 1313px;
    height: 803px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
`
// 버튼 박스
const ButtonBox = styled.div`
    width: 1313px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`
const CreateButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const VoteButton = styled.div`
    width: 110px;
    height: 50px;
    border-radius: 25px;
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 30px;
`
// 카드 빅스
const CardBox = styled.div`
    width: 1313px;
    height: 720px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y: auto;
    column-gap: 113px;
`

export default function Vote() {
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState();

    const [isVoting, setIsVoting] = useState(false);
    const [selected, setIsSelected] = useState([]);
    const [count, setCount] = useState(0);

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [postCount, setPostCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    // 투표 관련 로직
    useEffect(() => {
        setCount(5);
    }, [])

    const handleCard = (id) => {
        if (isVoting) {
            if (count - selected.length > 0) {
                setIsSelected((prev) => prev.includes(id) ? prev.filter((prevId) => prevId !== id) : [...prev, id]);
                console.log(selected)
            }
            else if (selected.includes(id)) {
                setIsSelected((prev) => prev.filter((prevId) => prevId !== id));
            }
            else {
                alert("투표권이 부족합니다.");
            }
        }
        else {
            setId(id);
            setModalOpen(true);
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    // 투표 모드
    const toggleVoteMode = () => {
        setIsVoting(!isVoting);
    }

    useEffect(() => {
        if (!isVoting) {
            setIsSelected([]);
        }
    }, [isVoting])

    const create = () => {
        navigate("/vote-page/create");
    }

    // 게시글 조회 로직
    useEffect(() => {
        if (isActive) {
            getData();
        }
    }, [isActive])

    // 무한 스크롤 필요 로직
    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            console.log(target.isIntersecting)
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((handleObserver), {
            threshold: 0.25,
        });

        const observerTarget = document.getElementById("observer");

        if (observerTarget) {
            observer.observe(observerTarget);
        }

        return () => {
            if (observerTarget) {
                observer.unobserve(observerTarget);
            }
        };

        
    }, []);

    async function getData() {

        try {
            const response = await fetch(`${API.VOTE}paged?page=${page}&size=9&sort=createdAt,DESC`, {
                method: "GET",
                mode: "cors",
                credentials: "include"
            })

            if (response.ok) {
                console.log("게시판 조회 성공")
                const datas = await response.json();
                setPostCount(datas.count + " " + page);
                setData((prevData) => [...prevData, ...datas.posts]);
                setPage(page+1);
                console.log(datas)
            }
            else {
                console.log("게시판 조회 실패")
            }
        }
        catch (err) {
            console.log("게시판 조회 오류 발생", err)
        }
    }

    return (
        <MainDiv>
            <BodyBox>
                <ButtonBox>
                    <CreateButton onClick={create}><Edit sx={{ width: '35px', height: '35px' }} /></CreateButton>
                    <VoteButton onClick={toggleVoteMode}><HowToVote sx={{ width: '35px', height: '35px' }} />{isVoting && count - selected.length}</VoteButton>
                </ButtonBox>
                <CardBox>
                    {data.map((post) => (<VoteCard key={`${post.posdId}-${post.postImagePath}`} id={post.postId} postImagePath={API.BASE_URL + post.postImagePath} likesCount={post.likesCount} readPost={() => handleCard(post.postId)} vote={isVoting} select={selected} />))}
                    <div id="observer" style={{ width:"1131px", height: "100px"}} />
                </CardBox>
                {modalOpen && <ContentModal closeModal={closeModal} id={id} />}
            </BodyBox>
        </MainDiv>
    )
}