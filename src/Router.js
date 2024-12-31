import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignPage from './pages/SignPage';
import CreatePostPage from './pages/CreatePostPage';
import ReadPostPage from './pages/ReadPostPage';
import CreateVPostPage from './pages/CreateVPostPage';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/*" element={"404 not found"} />
                <Route path="/auth/:state" element={<SignPage />}/>
                <Route path="/standard-page/create" element={<CreatePostPage />} />
                <Route path="/standard-page/:post_id" element={<ReadPostPage />} />
                <Route path="/standard-page/edit/:post_id" element={<CreatePostPage />} />
                <Route path="/vote-page/create" element={<CreateVPostPage />} />
            </Routes>
        </BrowserRouter>
    )
}

/*
/auth/:state => 로그인/회원가입
/member => 회원정보수정
/main => 메인 페이지

/standard-page/create => 일반 게시글 생성
/standard-page/:post_id => 일반 게시글 조회
/standard-page/edit/:posd_id => 일반 게시글 수정

/vote-page/create => 투표 게시글 생성
/vote-page/:post_id => 투표 게시글 조회

https://whitewise95.tistory.com/312
*/