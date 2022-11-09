
import Router, {useRouter} from "next/router"

import {members, getUploadUrl} from "../services/creatorRequests"
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Members({ Component, pageProps }) {
  

    const router = useRouter();
    const [channel,setChannel]=useState(router.query.channel)


    console.log('membership :>> ', channel,router.query,router);


    useEffect(()=>{
        if(router.query.signature!==null)
        console.log('router.query.signature :>> ', router.query.address);
        else
        console.log("No Signature");
      },[router.query.signature])

    
    const handleClick=async()=>{
        const result = await getUploadUrl();
        console.log(result)
    }

  return(
    <div>
      <Typography>
        {channel}
      </Typography>
      <Button onClick={()=>handleClick()}>
      ClickHere
      
      </Button>
    </div>
  )
}

export default Members
