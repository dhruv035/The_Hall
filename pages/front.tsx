
import Router, {useRouter} from "next/router"
import axios from "axios";
import {members} from "../services/creatorRequests"
import { Button } from '@mui/material';
import {Header} from "../components/organisms/Header"
import { NextPage } from "next";
const Front:NextPage=()=> {
    const handleClick= async () => {
        Router.push(
          {
            pathname:"/[channel]/members",
            query:{
              channel:'123'
            }
          })
      }
      
    
      return(
        <div className="flex flex-col w-screen bg-gradient-to-b h-screen from-[#7FDEFF] to-white">
        <Header/>
          
        </div>
      )
}

export default Front
