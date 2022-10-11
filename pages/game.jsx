import React,{useEffect,useState} from 'react'
import { db } from '../firebase/clientApp';
import {ref,onValue,set} from 'firebase/database'
import { getCookie } from 'cookies-next';
export default function game() {
  const [gameData,setData] =  useState(null)
  useEffect(()=>{
    const gameInfo = getCookie('gameCode')
    console.log("game code", gameInfo);
    if(!gameInfo) return
    onValue(ref(db,`/${gameInfo}`), database=>{
      const data = database.val();
      setData(data)
        console.log(data)
      
    })
   },[])
  return (
    <div>{gameData?<div>
      {gameData.player2?"playing":"waiting on other player"}
    </div>:'loading'}</div>
  )
}
