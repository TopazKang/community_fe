import React from 'react';
import styled from 'styled-components';
import SignIn from '../components/member/SignIn';
import SignUp from '../components/member/SignUp';

const MainDiv = styled.div`
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

export default function SignPage() {

    var state = true;

    return (
        <>
            <MainDiv>
                { state ? <SignIn></SignIn> : <SignUp></SignUp>}
            </MainDiv>
        </>
    )
}