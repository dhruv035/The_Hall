const getUploadUrl=async()=>{
    const response = await fetch(`http://localhost:5000/getUploadUrl`, {
        method: "GET",
        headers: { "Content-Type": "text/plain" },
      });
      console.log('response :>> ', response);
      const abc=await response.text();
      console.log('abc :>> ', abc);
      return response;
}

const members = async () => {
    console.log('hey :>> ');
    const response = await fetch(`http://localhost:5000/members`, {
        method: "GET",
        credentials:"include",
        redirect:"follow",
        
      }).then(async (res)=>{
       
        const abc= await res.text();
         console.log('response :>> ', abc);
        window.location=abc;

      });
     
      await response;
      
      return response;
}

export {
    getUploadUrl,
    members
}