import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Edit, HowToVote } from "@mui/icons-material";
import VoteCard from './VoteCard';
import ContentModal from './ContentModal';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    useEffect(() => {
        setCount(5);
    },[])

    const handleCard = (id) => {
        if (isVoting) {
            if (count - selected.length > 0) {
                setIsSelected((prev) => prev.includes(id) ? prev.filter((prevId) => prevId !== id) : [...prev, id]);
                console.log(selected)
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
        if(!isVoting){
            setIsSelected([]);
        }
    },[isVoting])

    const create = () => {
        navigate("/vote-page/create");
    }


    return (
        <MainDiv>
            <BodyBox>
                <ButtonBox>
                    <CreateButton onClick={create}><Edit sx={{ width: '35px', height: '35px' }} /></CreateButton>
                    <VoteButton onClick={toggleVoteMode}><HowToVote sx={{ width: '35px', height: '35px' }} />{isVoting && count-selected.length}</VoteButton>
                </ButtonBox>
                <CardBox>
                    <VoteCard readPost={() => handleCard(1)} vote={isVoting} select={selected} id={1}></VoteCard>
                    <VoteCard readPost={() => handleCard(2)} vote={isVoting} select={selected} id={2}></VoteCard>
                    <VoteCard readPost={() => handleCard(3)} vote={isVoting} select={selected} id={3}></VoteCard>
                    <VoteCard readPost={() => handleCard(4)} vote={isVoting} select={selected} id={4}></VoteCard>
                    <VoteCard readPost={() => handleCard(5)} vote={isVoting} select={selected} id={5}></VoteCard>
                    <VoteCard readPost={() => handleCard(6)} vote={isVoting} select={selected} id={6}></VoteCard>
                    <VoteCard readPost={() => handleCard(7)} vote={isVoting} select={selected} id={7}></VoteCard>
                </CardBox>
                {modalOpen && <ContentModal closeModal={closeModal} id={id} />}
            </BodyBox>
        </MainDiv>
    )
}