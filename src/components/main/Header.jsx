import React from 'react';
import styled from 'styled-components';
import { Camera, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MainDiv = styled.div`
    width: 1920px;
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Title = styled.a`
    font-family: 'Ainmom';
    font-size: 70px;
    font-weight: bold;
`

export default function Header({ login }) {

    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    return (
        <>
            <MainDiv>
                <Camera sx={{ width: '45px', height: "45px", marginTop: "10px", marginRight: "15px"}} />
                <Title onClick={home}>셔터</Title>
                {login && <AccountCircle onClick={()=> {alert('hel')}} sx={{ width: '55px', height: "55px", position: "absolute", marginLeft: '1400px', marginTop: '10px' }} />}
            </MainDiv>
        </>
    )
}