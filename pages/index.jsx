import React,{useState} from 'react'
import { useRouter } from 'next/router'
import { setCookie  } from 'cookies-next';
export default function Home() {
  const router = useRouter()
  const [gameCode,setCode] = useState("")
  return (
    <div>
      <h2>Create a game</h2>
      <button className='border-2' onClick={() =>{ setCookie('player',1) ;router.push("create-character")}}>Create</button>
      
      <h1>or</h1>
      <h2>Join  a game</h2>
      <input onChange={(e)=>setCode(e.target.value)}  placeholder='game code' type="text" /><br />
      <button className='border-2' onClick={() =>{
        setCookie('player',2)
        setCookie('gameCode',gameCode)
         router.push("create-character")
      }}>join</button>
    </div>
  )
}