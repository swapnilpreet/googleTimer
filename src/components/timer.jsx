import { useEffect, useState } from "react";

function Timer(){
    const [count,setCount] = useState(59);
    const [min,setMin] = useState(4)
    const [show,setShow] = useState(false);
    let time;
    function handleTimer(){
        setShow(!show)
    }
    useEffect(()=>{
        if(show){
            time = setInterval(()=>{
                setCount(count-1)
                if(count==0){
                    setMin(min-1)
                    setCount(59)
                }
                if(min==0){
                    setMin(0)
                    setCount(0)
                }
                
            },100)
            return ()=>clearInterval(time)
        }
    })
    
    return(
        <div className="timer">
            <div className="border">
            <h2>{min<10 ? "0"+min: min}m {count<10 ? "0"+count: count}s</h2>
            </div>
            
            <div>
                {show?<button onClick={handleTimer}>Stop</button>:<button onClick={handleTimer}>Start</button>}
                <button onClick={()=>{
                    setCount(0)
                    setMin(5)
                    setShow(false)
                }}>Reset</button>
            </div>           
        </div>
    )
}
export default Timer;