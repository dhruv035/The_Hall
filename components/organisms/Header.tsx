
  
import Router, {useRouter} from "next/router"
import { Button } from '@mui/material';
import React from "react";
import {Icon} from "@mui/material";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SvgIcon } from "@mui/material";
import  LogoIcon from "../../public/Logo"
export const Header = () => {
  const router= useRouter();
  const handleClick=(e)=>{
    e.preventDefault()
    router.push(e.currentTarget.value)
  }
  
  
  return (
    <div 
    className="flex flex-row justify-start w-screen mx-4 my-8">
      
      <div className="flex flex-row items-center">
        <div className="flex flex-row mr-12">
        <div>
        <LogoIcon
        sx={{
          fontSize:50
        }}
        />
        </div>
        <div className="text-[35px] font-['Urbanist'] font-bold">
        DeCommune
        </div>
        </div>
      <div className="text-[18px] text-main-[#14161B] font-bold font-['Urbanist] mr-8">
        <button value="mint" onClick={(e)=>handleClick(e)}>
          Explore
        </button>
      </div>
      <div className="text-[18px] text-main-[#14161B] font-bold font-['Urbanist] mr-8">
        <button value="mint" onClick={(e)=>handleClick(e)}>
          Profile
        </button>
      </div>
      <div className="text-[18px] text-main-[#14161B] font-bold font-['Urbanist] mr-8">
        <button value="mint" onClick={(e)=>handleClick(e)}>
          Create
        </button>
      </div>
      <div className="text-[18px] text-main-[#14161B] font-bold font-['Urbanist] mr-8">
        <button value="mint" onClick={(e)=>handleClick(e)}>
          Upload
        </button>
      </div>
      <div className="text-[18px] text-main-[#14161B] font-bold font-['Urbanist] mr-8">
        <button value="mint" onClick={(e)=>handleClick(e)}>
          Explore
        </button>
      </div>

        </div>
      <div className="flex flex-row-reverse w-full mx-4">
        <ConnectButton
          accountStatus="address"
          showBalance={false}
        />
      </div>
      {/* <Link href="/">
        <img src="../assets/release_club_logo.png" />
      </Link> */}
      
    </div>
  );
};

