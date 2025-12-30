import { useState, useEffect } from 'react';

export default function Wow() {

    const [팝업창stat, set팝업창stat] = useState(true);

    function getCookie(name) {
        const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
        return value ? value.split('=')[1] : null;
    }

    function 팝업여부확인() {
        const value = getCookie('boardPop');
        console.log('함수: ', value);
        set팝업창stat(value === null || value === 'true');
    }
    
    //랜더링 시작
    useEffect(() => {
        팝업여부확인();
        console.log(팝업창stat);
    }, []);
    
    useEffect(() => {
    }, [팝업창stat]);
    return(
        <div>
            <h1>광고 페이지</h1>
            {팝업창stat && <팝업창 evtClose={() => {
                set팝업창stat(false);
            }}/>}
        </div>
    )
}

function 팝업창({evtClose}) {
    
    return (
        <div style={{
            position: 'absolute'
            ,top:'0px'
            ,left:'0px'
            ,display: 'flex'
            ,justifyContent: 'center'
            ,alignItems: 'center'
            ,width: '100vw'
            , height:'100vh'
            , backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div
                style={{
                    padding: '15px'
                    , width: '50vw'
                    , height:'50vh'
                    , backgroundColor: '#fff'
                    , borderRadius: '15px'}}>
                        <span
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                            evtClose();
                        }}>창 닫기</span><br/>
                        <span
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                            //evtClose();
                            document.cookie = "boardPop=false; path=/wow; max-age=100";
                            evtClose();
                        }}>일주일 동안 안 보기</span>
                </div>

        </div>
    )
}