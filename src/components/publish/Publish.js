import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Publish.scss";

export default function Publish(){
    const navigate=useNavigate();
    useEffect(() => {
      const redirect=setTimeout(()=>{
        navigate("/")
      },4000);
    
      return () => {
        clearTimeout(redirect);
      }
    }, []);
    
    return (
        <div>
            <h1>Thanks for uploading. You will be redirected to Home page in few seconds</h1>
        </div>
    );
}