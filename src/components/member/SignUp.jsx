import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TextField, Fab, Button } from '@mui/material';
import { CameraEnhanceOutlined, ChangeCircleOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { API } from "../../apis/routes";

// 메인 구획
const MainBox = styled.div`
    width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px;
    border-radius: 25px;
    position: relative;
`
// 타이틀 + 버튼 구획
const BoxHeader = styled.div`
    width: 600px;
    height: 98px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    position: relative;
    
`
// 타이틀 글자
const Title = styled.a`
    font-size: 36px;
    white-space: nowrap;
`
// 입력 구획
const InputBox = styled.div`
    width: 500px;
    height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
// 입력 상단(가로 정렬)
const InputRow = styled.div`
    width: 500px;
    height: 200px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
// 입력 상단(세로 정렬)
const InputColumn = styled.div`
    width: 270px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
`
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function SignUP({ changeState, modifyState }) {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [nickname, setNickname] = useState('');
    const [isNicknameValid, setIsNicknameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState();

    const [datas, setDatas] = useState({});

    useEffect(() => {
        if (modifyState) {
            getInfo();
        }
    }, [modifyState])

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);

        setIsNameValid(value.length <= 0);
    }

    const handleNicknameChange = (event) => {
        const value = event.target.value;
        setNickname(value);

        setIsNicknameValid(value.length <= 0);
    }

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        // 이메일 유효성 검사 (정규 표현식 사용)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(value));
    };

    // 비밀번호 유효성 검사 핸들러 (예: 최소 8자)
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);

        setIsPasswordValid(value.length <= 0);
    };

    // 회원가입 버튼 클릭시 처리
    const handleRegister = () => {
        if (modifyState) {
            modifyInfo();
        }
        else {
            register();
        }

    }

    async function register() {

        const formData = new FormData();
        const requestData = {
            name: name,
            nickname: nickname,
            email: email,
            password: password
        }
        formData.append("request", JSON.stringify(requestData));
        formData.append("file", file);
        console.log(API.MEMBER)

        try {
            const response = await fetch(API.MEMBER, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                body: formData
            })

            if (response.ok) {
                console.log("업로드 성공")
                navigate("/auth/signIn");
            }
            else {
                console.log("업로드 실패")
            }
        }
        catch (err) {
            console.log("회원가입 오류 발생", err)
        }

    }

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
        const img = e.target.files[0];
        const url = URL.createObjectURL(img);
        setPreview(url);
    };

    // 회원 정보 수정 관련 로직
    async function getInfo() {
        const token = localStorage.getItem("accessToken");

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
                console.log(data)
                setPreview(API.BASE_URL + data.profile_image_path);
                setName(data.name);
                setNickname(data.nickname);
                setEmail(data.email);
            }
            else {
                console.log("회원정보 조회 실패")
            }
        }
        catch (err) {
            console.log("회원정보 조회 오류 발생", err)
        }
    }

    async function modifyInfo() {

        const token = localStorage.getItem("accessToken");

        const formData = new FormData();
        const requestData = {
            nickname: nickname
        }
        formData.append("request", JSON.stringify(requestData));
        formData.append("file", file);

        try {
            const response = await fetch(API.MEMBER, {
                method: "PATCH",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            })

            if (response.ok) {
                console.log("업로드 성공")
            }
            else {
                console.log("업로드 실패")
            }
        }
        catch (err) {
            console.log("회원가입 오류 발생", err)
        }

    }


    return (
        <>
            <MainBox>
                <BoxHeader>
                    <Title>{modifyState ? "회원정보수정" : "회원가입"}</Title>
                    {modifyState ?
                        <></>
                        :
                        <Fab
                            color="primary"
                            aria-label="add"
                            onClick={() => { changeState() }}
                            sx={{ width: '98px', height: '98px', marginLeft: '600px', position: 'absolute' }}>
                            <ChangeCircleOutlined sx={{ width: '88px', height: '88px' }} />
                        </Fab>
                    }

                </BoxHeader>
                <InputBox>
                    <InputRow>
                        {preview ?
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                sx={{ width: '215px', height: '215px', borderRadius: '50%' }}>
                                <img src={preview} style={{ width: '215px', height: '215px', borderRadius: '50%' }} />
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => handleFileUpload(event)}
                                    multiple
                                />
                            </Button>
                            :
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                sx={{ width: '215px', height: '215px', borderRadius: '50%' }}>
                                +
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => handleFileUpload(event)}
                                    multiple
                                />
                            </Button>
                        }
                        <InputColumn>
                            <TextField
                                sx={{ width: '250px', marginBottom: '50px' }}
                                label="name"
                                variant="outlined"
                                value={name}
                                onChange={handleNameChange}
                                error={isNameValid && name === ''}
                                helperText={isNameValid && name === '' ? "이름을 입력해주세요." : ""}
                                disabled={modifyState && "disabled"}
                            />
                            <TextField
                                sx={{ width: '250px' }}
                                label="nickname"
                                variant="outlined"
                                value={nickname}
                                onChange={handleNicknameChange}
                                error={isNicknameValid && name === ''}
                                helperText={isNicknameValid && name === '' ? "닉네임을 입력해주세요." : ""}
                            />
                        </InputColumn>
                    </InputRow>
                    <TextField
                        sx={{ width: '500px', marginBottom: '30px' }}
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isEmailValid && email !== ''}
                        helperText={!isEmailValid && email !== '' ? "유효한 이메일 주소를 입력하세요." : ""}
                        disabled={modifyState && "disabled"}
                    />
                    {modifyState ? <></> :
                        <TextField
                            sx={{ width: '500px' }}
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={handlePasswordChange}
                            error={isPasswordValid && password === ''}
                            helperText={isPasswordValid && password === '' ? "비밀번호가 입력되지 않았습니다." : ""}
                            disabled={modifyState && "disabled"}
                        />
                    }
                </InputBox>
                <Button
                    variant="contained"
                    onClick={() => { handleRegister() }}
                    sx={{ width: '130px', height: '60px', marginTop: '5px', borderRadius: '25px', fontSize: '24px', backgroundColor: 'brown' }}
                    endIcon={<CameraEnhanceOutlined />}>
                    화긴
                </Button>
            </MainBox >
        </>
    )
}