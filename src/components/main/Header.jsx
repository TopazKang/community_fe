import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Camera, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../apis/routes';

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

const Profile = styled.div`
    width: 55px; 
    height: 55px;
    position: absolute; 
    margin-left: 1400px;
    margin-top: 10px;
`

export default function Header({ login }) {

    const [url, setUrl] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            getInfo(token)
        }
    }, [])


    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    async function getInfo(token) {

        try {
            const response = await fetch(API.MEMBER, {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (response.ok) {
                console.log("회원정보 조회 성공")
                const data = await response.json();
                setUrl(API.BASE_URL + data.profile_image_path);
            }
            else {
                console.log("회원정보 조회 실패")
            }
        }
        catch (err) {
            console.log("회원정보 조회 오류 발생", err)
        }
    }

    return (
        <>
            <MainDiv>
                <Camera sx={{ width: '45px', height: "45px", marginTop: "10px", marginRight: "15px" }} />
                <Title onClick={home}>셔터</Title>
                {url ? <Profile onClick={() => alert("profile")}><img src={url} width= '55px' height= "55px" /></Profile> : <Profile onClick={() => alert("profile")}><AccountCircle sx={{ width: '55px', height: "55px" }} /></Profile>}
            </MainDiv>
        </>
    )
}