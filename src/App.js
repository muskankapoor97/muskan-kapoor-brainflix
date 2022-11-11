import "./App.scss";
import { useState } from "react";
import Header from "./components/header/Header";
import getVideoDetails, { getVideos } from "./utils/utils";
import Comments from "./components/comments/Comments";
import Description from "./components/description/Description";
import Hero from "./components/hero/Hero";
import SideVideos from "./components/sideVideos/SideVideos";

export default function App() {
   const [videoId, setvideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

  
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(
    getVideoDetails(videoId)
  );

  const handleClick = (clickEvnt, videoIdClickedOn) => {
    setvideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  const timestamps=(oldTimestamp)=>{
    let newTimeStamp=new Date(oldTimestamp);
    let newDate=newTimeStamp.getUTCMonth()+1+"/"+ newTimeStamp.getUTCDate()+"/"+ newTimeStamp.getUTCFullYear();
    return newDate;
  }
 return (
    <>
    <Header />
    <Hero videoPoster={videoDetails.image}/>
    <div className="mainPage">
      <div className="mainPage__containers-one">
    <Description videoDetails={videoDetails}/> 
     <Comments videoComments={videoDetails.comments} timestamps={timestamps}/>
     </div>
     <div className="mainPage__containers-two">
    <SideVideos videos={videos} onClick={handleClick}/>
    </div>
    </div>
    </>
 );
}


