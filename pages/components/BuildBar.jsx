import React,{useState} from 'react'

export default function BuildBar({name,setPoints,pointsLeft,stats,setStats}) {
  const [width,setWidth] = useState(0)
  const filled = {
    backgroundColor:"#dc2626"
  }
  const opened = {backgroundColor:"white"}
  return (
    <div className='w-full px-[10%] mx-auto my-auto'>
    <h1>{name}</h1>
    <div className='flex '>
      <button onClick={()=> {if(width>0){
        setWidth(width-1)
        setPoints(pointsLeft+1)
        stats[name] = stats[name] - 1
        console.log(stats)}
      }} className='border-2 w-5'>-</button>
     <h1></h1>
      <div className='w-full border-2 flex justify-between items-center relative'>
        <div style={{width:`${width*25-width/2}%`}} className='absolute h-1/2 left-3 right-3 bg-red-600'></div>

        <div style={filled} className='w-6 h-full rounded-full border-2 border-red-600'></div>
        <div style={width >= 1?filled:opened} className='w-6 h-full rounded-full border-2 border-red-600'></div>
        <div style={width >= 2?filled:opened} className='w-6 h-full rounded-full border-2 border-red-600'></div>
        <div style={width >= 3?filled:opened} className='w-6 h-full rounded-full border-2 border-red-600'></div>
        <div style={width >= 4?filled:opened} className='w-6 h-full rounded-full border-2 border-red-600'></div>
      </div>
      <button onClick={()=> {if(width<4 && pointsLeft > 0){
        setWidth(width+1)
        setPoints(pointsLeft-1)
        stats[name] = stats[name] + 1
      console.log(stats)}
      }} className='border-2 w-5'>+</button>
    </div>
    </div>
  )
}
