import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main';
import Header from '../components/main/Header';
import Home from '../components/home/Home';
import Board from '../components/board/Board';
import Vote from '../components/vote/Vote';
import ReadPost from '../components/board/ReadPost';

import { useParams } from 'react-router-dom';

const MainDiv = styled.div`
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export default function ReadPostPage() {
    const [home, setHome] = useState(false);
    const [board, setBoard] = useState(false);
    const [vote, setVote] = useState(false);
    const [content, setContent] = useState(true);
    const [title, setTitle] = useState("게시판");

    const param = useParams();

    useEffect(() => {
        if(param.post_id != null){
            handleContent();
        }
    },[param.post_id])

    const handleHome = () => {
        setHome(true);
        setBoard(false);
        setVote(false);
        setContent(false);
        setTitle("메인");
    }
    const handleBoard = () => {
        setHome(false);
        setBoard(true);
        setVote(false);
        setContent(false);
        setTitle("게시판");
    }
    const handleVote = () => {
        setHome(false);
        setBoard(false);
        setVote(true);
        setContent(false);
        setTitle("투표");
    }

    const handleContent = () => {
        setHome(false);
        setBoard(false);
        setVote(false);
        setContent(true);
        setTitle("게시판");
    }

    return(
        <>
            <MainDiv>
                <Header login={true}/>
                <Main home={handleHome} board={handleBoard} vote={handleVote} content={handleContent} title={title}>
                    {home && <Home/>}
                    {board && <Board/>}
                    {vote && <Vote/>}
                    {content && <ReadPost/>} 
                </Main>
            </MainDiv>
        </>
    )
}