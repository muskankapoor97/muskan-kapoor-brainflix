import "./VideoDetailsPage.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "../../components/comments/Comments";
import Description from "../../components/description/Description";
import Hero from "../../components/hero/Hero";
import SideVideos from "../../components/sideVideos/SideVideos";
import { useParams } from "react-router-dom";



function VideoDetailsPage() {

const [videoId,setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");  
const [videos, setVideos] = useState([]);
const [videoDetails, setVideoDetails] = useState({});

const params=useParams();


  
const getVideos = (data) => {
  if (Object.keys(params).length === 0){
    return data.filter((video) => (video.id !=="84e96018-4022-434e-80bf-000ce4cd12b8" ));
  }
    else{
      return data.filter((video) => (video.id !== params.videoId));
    } 
  };


//fetching videos using axios
  useEffect(()=>{
    const fetchVideos= async () => {
      try {
        const {data} = await axios.get
        (`http://localhost:8080/videos`);
        setVideos(getVideos(data));
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideos();
    },
   [params.videoId]);





//fetching videoDetails using axios
   useEffect(()=>{
    if (params.videoId){
    const fetchVideoDetails= async () => {
      try {
        const response = await axios.get
        (`http://localhost:8080/videos/${params.videoId}`);
        setVideoDetails(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideoDetails();
  }
  else{
    const fetchVideoDetails= async () => {
      try {
        const response = await axios.get
        (`http://localhost:8080/videos/${videoId}`);
        setVideoDetails(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideoDetails();
  }
    },
  
   [params.videoId]);
 
 
 
  return (
    <>
   
    <Hero videoPoster={videoDetails.image}/>
    <div className="mainPage">
      <div className="mainPage__containers-one">
    <Description videoDetails={videoDetails} /> 
     <Comments videoDetails={videoDetails} />
     </div>
     <div className="mainPage__containers-two">
    <SideVideos videos={videos} videoId={videoId}/>
    </div>
    </div>
    </>
 );
}

export default VideoDetailsPage;



