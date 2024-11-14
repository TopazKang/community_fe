import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    background-color: lightgray;
    width: 110px;
    height: 167px;
    margin-left:70px;
`
const Svg = styled.svg`
    margin-left: -56px;
`


export default function Ring() {
    return (
        <MainDiv>
            <Svg width="167" height="150" viewBox="0 0 167 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="142" cy="56" r="25" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M75 150C116.421 150 150 116.421 150 75C150 33.5786 116.421 0 75 0C33.5786 0 0 33.5786 0 75C0 116.421 33.5786 150 75 150ZM75 130C105.376 130 130 105.376 130 75C130 44.6243 105.376 20 75 20C44.6243 20 20 44.6243 20 75C20 105.376 44.6243 130 75 130ZM144.599 47C148.082 55.6514 150 65.1017 150 75C150 76.5927 149.95 78.1738 149.852 79.7419C147.383 80.5582 144.743 81 142 81C137.621 81 133.505 79.8741 129.925 77.8959C128.419 106.925 104.404 130 75 130C68.3218 130 61.9216 128.81 56 126.63V147.572C62.0681 149.157 68.4355 150 75 150C116.421 150 150 116.421 150 75C150 65.1018 148.083 55.6514 144.599 47H144.599Z" fill="#4d3800" />
            </Svg>
        </MainDiv>
    )
}