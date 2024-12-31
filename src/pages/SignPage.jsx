import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/member/SignIn';
import SignUp from '../components/member/SignUp';
import { useParams } from 'react-router-dom';

const MainDiv = styled.div`
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

export default function SignPage() {

    const [signState, setSignState] = useState(true);
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
    },[param.state])


    return (
        <>
            <MainDiv>
                {signState ? <SignIn changeState={handleState} /> : <SignUp changeState={handleState} />}
            </MainDiv>
        </>
    )
}