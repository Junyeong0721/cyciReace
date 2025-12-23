import 사과사진 from './apple.png';
import 유령사진 from './ghost.jpg';
import { useState } from 'react';

export default function Study(){

    const obj1 = {title: '귀여운 유령사진',
                    content: '작고 귀여운 하얀 유령',
                    img: 유령사진,
                    goodCnt: 0
    }
    const obj2 = {title: '빨간 사과',
                    content: '귀엽고 말랑한 빨간 사과',
                    img: 사과사진,
                    goodCnt: 0
    }
    // const lists=[obj1, obj2];

    
    const [lists, setLists] = useState([obj1, obj2]);

    function 부모호출(index){
        console.log(lists[index]);
        lists[index].goodCnt = lists[index].goodCnt+1;
        setLists(lists);
            
    }
    return (
        <div>
            <h1>Div 나누기</h1>
            아래의 빨간색 영역을 Component로 나누어 보세요.
            <게시판 data={obj1}/>
            <게시판 data={obj2}/>
            <h3>구분선</h3>
            {lists.map((item, index) => (
                
                <게시판 key = {index} data={item} fnGood={부모호출} dataIndex={index}/>
            ))}
            

        </div>
    )
}
function 게시판(props){
    return (
        <div style={{
            display:'flex',
            border: '3px solid red'
        }}>
            <img src={props.data.img}
            style={{
                marginRight: '20px'
                ,width:'200px'
                ,height: '200px'
                ,objectFit: 'cover'
                ,borderRadius: '50%'
                ,border: '1px solid black'
            }}/>
            <div>
                <h1>{props.data.title}</h1>
                <span>{props.data.content}</span>
                <input type = "button" value = "좋아요" onClick={e=>{
                    props.fnGood(props.dataIndex);
                }}/> 
                {props.data.goodCnt}
            </div>
            
            
        </div>
    )
}
function 사과(){
    return (
        <div>
            <div style={{
                width:'100vw',
                height : '200px',
                border : '2px red solid',
                display : 'inline-block'
            }}>
                <div style={{
                    width: '10%%',
                    height: '100%',
                    display : 'inline-block'
                    
                }}>
                    <img src={사과사진}></img>
                </div>
                <div style={{
                    verticalAlign : 'top',
                    width: '70%',
                    height: '100%',
                    display : 'inline-block'
                    }}>
                    <div style={{
                        width: '80%',
                        height : 'auto',
                        display : 'inline-block'
                        }}>
                        <h1>맛있는 사과</h1>
                    </div>
                    <div style={{
                        width:'80%',
                        height: '50%',
                        display : 'inline-block'
                        }}>
                        작고 말랑말랑한 사과
                    </div>

                </div>
                

            </div>

        </div>
    )
}
function 유령 (){
    return(
        <div>
            <div style={{
                width:'100vw',
                height : '250px',
                border : '2px red solid',
                display : 'inline-block'
                }}>
                <div style={{
                    width: '10%%',
                    height: '100%',
                    display : 'inline-block'
                    
                    }}>
                    <img src={유령사진}></img>
                </div>
                <div style={{
                    verticalAlign : 'top',
                    width: '80%',
                    height: '100%',
                    display : 'inline-block'
                    }}>
                    <div style={{
                        width: '80%',
                        height: 'auto',
                        display : 'inline-block'
                        }}>
                        <h1>작은 유령</h1>
                    </div>
                    <div style={{
                        width:'80%',
                        height: '50%',
                        display : 'inline-block'
                        }}>
                        작고 말랑말랑한 유령
                    </div>

                </div>
                

            </div>
        </div>
    )
}