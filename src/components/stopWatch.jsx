import { useEffect, useState } from "react";

function StopWatch(){
    const [count,setCount] = useState(0);
    const [min,setMin] = useState(0)
    const [hr,setHr] = useState(0)
    const [show,setShow] = useState(false);
    let time;
    function handleTimer(){
        setShow(!show)
    }
    useEffect(()=>{
        if(show){
            time = setInterval(()=>{
                setCount(count+1)
                if(count==59){
                    setMin(min+1)
                    setCount(0)
                }
                if(min==59){
                    setHr(hr+1)
                    setMin(0)
                }
                
            },20)
            return ()=>clearInterval(time)
        }
    })
    
    return(
        <div className="stopwatch">
            <div className="border">
                <h2>0{hr}h {min<10 ? "0"+min: min}m {count<10 ? "0"+count: count}s</h2>
            </div>     
            <div>
                {show?<button onClick={handleTimer}>Stop</button>:<button onClick={handleTimer}>Start</button>}
                <button onClick={()=>{
                    setCount(0)
                    setHr(0)
                    setMin(0)
                    setShow(false)
                }}>Reset</button>
            </div>           
        </div>
    )
}
export default StopWatch;