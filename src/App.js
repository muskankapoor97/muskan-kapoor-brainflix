import "./App.scss"
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/Header";
// import getVideoDetails, { getVideos } from "./utils/utils";
import VideoUpload from "./pages/videoUpload/VideoUpload";
import Comments from "./components/comments/Comments";
import Description from "./components/description/Description";
import Hero from "./components/hero/Hero";
import SideVideos from "./components/sideVideos/SideVideos";


export default function App() {
  const myApiKey="d89a5cd6-173c-4e27-9611-45546c24985f";
   const [videoId, setvideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
   
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});



  //fetching videos using axios
  useEffect(()=>{
    const fetchVideos= async () => {
      try {
        const response = await axios.get
        ("https://project-2-api.herokuapp.com/videos?api_key=d89a5cd6-173c-4e27-9611-45546c24985f");
        console.log(response.data);
        setVideos(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideos();
    },
   []);

//fetching videoDetails using axios
   useEffect(()=>{
    const fetchVideoDetails= async () => {
      try {
        const response = await axios.get
        (`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=d89a5cd6-173c-4e27-9611-45546c24985f`);
        console.log(response.data);
        setVideoDetails(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideoDetails();
    },
   []);


// useEffect(() =>{
// const {id}=useParams();
// setvideoId(id);
// },[id]);
  const timestamps=(oldTimestamp)=>{
    let newTimeStamp=new Date(oldTimestamp);
    let newDate=newTimeStamp.getUTCMonth()+1+"/"+ newTimeStamp.getUTCDate()+"/"+ newTimeStamp.getUTCFullYear();
    return newDate;
  }
 return (
    <>
    <Header />
    {/* <Routes>
      <Route path="videoUpload" element={<VideoUpload />} />
      <Route path="videos:videoId" element={
    <> */}
    <Hero videoPoster={videoDetails.image}/>
    
    <div className="mainPage">
      <div className="mainPage__containers-one">
    <Description videoDetails={videoDetails}/> 
     <Comments videoComments={videoDetails.comments} timestamps={timestamps}/>
     </div>
     <div className="mainPage__containers-two">
    <SideVideos videos={videos} videoId={videoId}/>
    </div>
    </div>
    {/* </> */}
    {/* // } />
    // </Routes> */}
    
    
    
    </>
 );
}




