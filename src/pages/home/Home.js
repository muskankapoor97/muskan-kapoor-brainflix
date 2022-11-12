import "./Home.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import Description from "../../components/description/Description";
import Hero from "../../components/hero/Hero";
import SideVideos from "../../components/sideVideos/SideVideos";
import { useParams } from "react-router-dom";



function Home() {

const [videoId,setVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");  
const [videos, setVideos] = useState([]);
const [videoDetails, setVideoDetails] = useState({});

const params=useParams();
console.log(params);

  



//fetching videos using axios
  useEffect(()=>{
    const fetchVideos= async () => {
      try {
        const response = await axios.get
        (`https://project-2-api.herokuapp.com/videos?api_key=d89a5cd6-173c-4e27-9611-45546c24985f`);
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
    if (params.videoId){
    const fetchVideoDetails= async () => {
      try {
        const response = await axios.get
        (`https://project-2-api.herokuapp.com/videos/${params.videoId}?api_key=d89a5cd6-173c-4e27-9611-45546c24985f`);
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
        (`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=d89a5cd6-173c-4e27-9611-45546c24985f`);
        setVideoDetails(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideoDetails();
  }
    },
  
   []);


// const timestamps=(oldTimestamp)=>{
// let newTimeStamp=new Date(oldTimestamp);
// let newDate=newTimeStamp.getUTCMonth()+1+"/"+ newTimeStamp.getUTCDate()+"/"+ newTimeStamp.getUTCFullYear();
// return newDate;
//   }
 
 
 
  return (
    <>
    <Header />
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

export default Home;



