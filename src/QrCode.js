import React, { useState } from 'react'

function QrCode() {
    const [img,setImg]=useState("");
    const [code,setCode]=useState("https://www.youtube.com/")
    const [loading,setLoading]=useState(false);
async function generateQr(){
    setLoading(true);
    try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(code)}`;
        setImg(url);
    }catch(e){
        console.log(e.message)
    }finally{
        setLoading(false)
    }
}
function downloadQr(){
    fetch(img)
    .then(val=>val.blob())
    .then(val=>{
      const a =  document.createElement("a");
      a.href = URL.createObjectURL(val)
      a.download = "qr";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
}

  return (
    <div>
        <div>
            <img src={img} alt="" />
        </div>
        <input type="text" onChange={(e)=>setCode(e.target.value)} />
        <button onClick={generateQr}>Generate</button>
        <button onClick={downloadQr}>Download</button>
    </div>
  )
}

export default QrCode