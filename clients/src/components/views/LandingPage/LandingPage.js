import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
    useEffect(() => {
        axios
            .get('/api/hello')
            .then(response => console.log(response))
            .catch(error => console.error(error)); // 에러 처리를 추가했습니다.
    }, []);

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: "100%", height: "100vh"
        }}>
            <h2>시작페이지</h2></div>) // 한글 텍스트 수정
}

export default LandingPage;
