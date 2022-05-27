import '../App.css'
import Timer from './timer'
import StopWatch from './stopWatch'
import { useEffect, useState } from 'react'

function GoogleTimer() {
  const [showTimer,setShowTimer] = useState(true)
  useEffect(()=>{
    setShowTimer(!showTimer)
  },[])
  return (
    <div className="googleTimer">
        <div className='head'>
            <button value="timer" onClick={()=>{
            setShowTimer(true)
            }}>TIMER</button>
            <button value="stop" onClick={()=>{
                setShowTimer(false)
            }}>STOPWATCH</button>
        </div>
      
      {showTimer?<Timer />:<StopWatch />}     
    </div>
  )
}

export default GoogleTimer