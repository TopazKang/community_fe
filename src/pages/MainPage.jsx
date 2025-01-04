import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main';
import Header from '../components/main/Header';
import Home from '../components/home/Home';
import Board from '../components/board/Board';
import Vote from '../components/vote/Vote';
import { useParams } from 'react-router-dom';

const MainDiv = styled.div`
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export default function MainPage() {
    const [home, setHome] = useState(true);
    const [board, setBoard] = useState(false);
    const [vote, setVote] = useState(false);
    const [title, setTitle] = useState("메인");
    const param = useParams();

    useEffect(() => {
            if (param.state === "main") {
                handleHome();
            }
            if (param.state === "board") {
                handleBoard();
            }
            if (param.state === "vote") {
                handleVote();
            }
        },[param.state])

    const handleHome = () => {
        setHome(true);
        setBoard(false);
        setVote(false);
        setTitle("메인");
    }
    const handleBoard = () => {
        setHome(false);
        setBoard(true);
        setVote(false);
        setTitle("게시판");
    }
    const handleVote = () => {
        setHome(false);
        setBoard(false);
        setVote(true);
        setTitle("투표");
    }



    return(
        <>
            <MainDiv>
                <Header login={true}/>
                <Main home={handleHome} board={handleBoard} vote={handleVote} title={title}>
                    {home && <Home/>}
                    {board && <Board/>}
                    {vote && <Vote/>}
                </Main>
            </MainDiv>
        </>
    )
}