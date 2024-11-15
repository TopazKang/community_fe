import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main';
import Header from '../components/main/Header';
import Home from '../components/home/Home';

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

    const handleHome = () => {
        setHome(true);
        setBoard(false);
        setVote(false);
    }
    const handleBoard = () => {
        setHome(false);
        setBoard(true);
        setVote(false);
    }
    const handleVote = () => {
        setHome(false);
        setBoard(false);
        setVote(true);
    }

    return(
        <>
            <MainDiv>
                <Header login={true}/>
                <Main home={handleHome} board={handleBoard} vote={handleVote}>
                    {home && <Home/>}
                    {board && <></>}
                    {vote && <></>}
                </Main>
            </MainDiv>
        </>
    )
}