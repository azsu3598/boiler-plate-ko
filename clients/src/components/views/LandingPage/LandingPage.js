import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
    useEffect(() => {
        axios
            .get('api/hello')
            .then(response => console.log(response))
            .catch(error => console.error(error)); // 에러 처리를 추가했습니다.
    }, []);

    return <div>LandingPage 랜딩페이지</div>; // 한글 텍스트 수정
}

export default LandingPage;
