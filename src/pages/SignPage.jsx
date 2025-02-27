import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/member/SignIn';
import SignUp from '../components/member/SignUp';
import { useParams } from 'react-router-dom';
import Header from '../components/main/Header';

const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

export default function SignPage() {

    const [signState, setSignState] = useState(true);
    const [modifyState, setModifyState] = useState(false);
    const param = useParams();

    const handleState = () => {
        setSignState(!signState);
    }


    useEffect(() => {
        if (param.state === "signUp") {
            setSignState(false);
        }
        if (param.state === "signIn") {
            setSignState(true);
        }
        if (param.state === "modifyInfo") {
            setSignState(false);
            setModifyState(true);
        }
    }, [param.state])


    return (
        <>
            <MainDiv style={{height: modifyState ? "":"1080px"}}>
                {modifyState && <Header/>}
                {signState ? <SignIn changeState={handleState} /> : <SignUp changeState={handleState} modifyState={modifyState} />}
            </MainDiv>
        </>
    )
}