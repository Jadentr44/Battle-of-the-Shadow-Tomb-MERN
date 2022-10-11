import React,{useState,useEffect} from 'react'
import BuildBar from './components/BuildBar'
import { db } from '../firebase/clientApp'
import {ref,onValue,set} from 'firebase/database'
import generator from'generate-password';
import { setCookie,getCookie  } from 'cookies-next';
import { useRouter } from 'next/router'

export default function create() {
  const router = useRouter()
 

 function createPlayer(){
  const player = getCookie("player")
  console.log("player:",player)
  if(player==1){
  const gameCode = generator.generate({
    length:4,
    lowercase:false,
  })
  set(ref(db,`/${gameCode}`),{
    player1:stats,
    player2:null,
    turn:true
  })
  setCookie("gameCode",gameCode)
}
if(player==2){
  const gameCode = getCookie("gameCode")
  set(ref(db,`/${gameCode}`),{
    player2:stats,
  })
}
  // router.push('game')
 }

 const [pointsLeft,setPoints] = useState(10)
 const [stats,setStats] = useState({
  health:1,
  healing:1,
  attack:1,
  dexterity:1,
 })

  return (
    <div className='h-screen grid grid-cols-4'>
    
      <div className='my-[10%] w-full'>
        <h1 className=' text-center'>Points left:{pointsLeft}</h1>
        <div className='flex justify-center '>
        <button onClick={createPlayer} className='border-2 rounded-full '>Create player</button></div>
      </div>
      <div className=' col-span-3 h-full flex flex-col justify-between'>
      <BuildBar stats={stats} setStats={setStats} setPoints={setPoints} pointsLeft={pointsLeft} name={"health"} />
      <BuildBar stats={stats} setStats={setStats} setPoints={setPoints} pointsLeft={pointsLeft} name={"healing"} />
      <BuildBar stats={stats} setStats={setStats} setPoints={setPoints} pointsLeft={pointsLeft} name={"attack"} />
      <BuildBar stats={stats} setStats={setStats} setPoints={setPoints} pointsLeft={pointsLeft} name={"dexterity"} />
      </div>
     
    </div>
  )
}
