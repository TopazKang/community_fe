import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Ring from './Ring';
import { Button } from '@mui/material';
import { Home, PhotoLibrary, HowToVote, Replay } from '@mui/icons-material'
import GetTime from '../../utils/GetTime';

const MainDiv = styled.div`
        width: 1560px;
        height: 900px;
        display: flex;
        flex-direction: row;
        background-color: lightgrey;
        padding: 0px;
        position: relative;
`
// 스프링 자리
const SpringDiv = styled.div`
    margin-top: 40px;
    width: 182px;
    height: 880px;
    margin-left: -70px;
    position: relative;
    background-repeat: repeat-y;
`
const Div = styled.div`
    width: 1450px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonDiv = styled.div`
    width: 96px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-left: 1560px;
`
// 페이지 타이틀
const TitleBox = styled.div`
    width: 1313px;
    height: 97px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
// 타이틀 글자
const Title = styled.a`
    font-family: 'Ainmom';
    font-size: 30px;
`
// 타이틀 날짜
const Date = styled.a`
    font-family: 'Ainmom';
    color: gray;
    font-size: 24px;
    position: absolute;
    margin-left: 1260px;
    margin-top: 55px;
`
// 수평선
const HalfLine = styled.hr`
    width: 1313px;
    height: 1px;
    border: 0px;
    background-color: gray;
    position: absolute;
    margin-top: 93px;
`;

export default function Main({ home, board, vote, content, children, title }) {

    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();



    useEffect(() => {
        const today = GetTime();
        setYear(String(today.getFullYear()).slice(-2));
        setMonth(("0" + (today.getMonth() + 1)).slice(-2));
        setDay(("0" + today.getDate()).slice(-2));
    }, [])


    return (
        <>
            <MainDiv>
                <SpringDiv>
                    <Ring />
                    <Ring />
                    <Ring />
                    <Ring />
                    <Ring />
                </SpringDiv>
                <Div>
                    <TitleBox>
                        <Title>{title}</Title>
                        <Date>{`${year}.${month}.${day}`}</Date>
                        <HalfLine />
                    </TitleBox>
                    {children}
                </Div>
                <ButtonDiv>
                    <Button
                        onClick={home}
                        sx={{ width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0' }}>
                        <Home
                            sx={{ width: '80px', height: '80px' }} />
                    </Button>
                    <Button
                        onClick={board}
                        sx={{ width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0' }}>
                        <PhotoLibrary
                            sx={{ width: '80px', height: '80px' }} />
                    </Button>
                    <Button
                        onClick={vote}
                        sx={{ width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0' }}>
                        <HowToVote
                            sx={{ width: '80px', height: '80px' }} />
                    </Button>
                    {content && <Button
                        onClick={content}
                        sx={{ width: '96px', height: '96px', backgroundColor: 'gray', marginBottom: "4px", borderRadius: '0 15px 15px 0' }}>
                        <Replay
                            sx={{ width: '80px', height: '80px' }} />
                    </Button>}
                </ButtonDiv>
            </MainDiv>
        </>
    )
}