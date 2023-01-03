import "./Home.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";





function Home() {
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
 
   const{
    id,
title,
channel,
description,
views,
likes,
timestamp,
...rest

}=videoDetails;
let newTimeStamp=new Date(videoDetails.timestamp);
    let newDate=newTimeStamp.getUTCMonth()+1+"/"+ newTimeStamp.getUTCDate()+"/"+ newTimeStamp.getUTCFullYear();
return(
    <section className="homeVideos">
      {videos&&videos.map((video) => (
        
        <div key={video?.id}>
      <div className="homeVideos__container">
      <Link to={`/videos/${video?.id}`}> 
        <div className="homeVideo">
          
          <img
          src={video.image}
          alt={video.title}
          className="homeVideo__video"
          
           />
          <div className="homeVideo__content">
          <p className="homeVideo__content-title">{video.title}</p>
            <p className="homeVideo__content-channel">By {video.channel}</p>
            <div className="homeVideo__content-description">
            <p className="description__date">{newDate}</p>
            <div className="description__views">
                <img src={viewsIcon} alt="views-icon" className="description__views-icon" />
                <span className="description__views-number">{views}</span>
            </div>
            <div className="description__likes">
            <img src={likesIcon} alt="likes-icon" className="description__likes-icon" />
            <span className="description__likes-number">{likes}</span>
            </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      </div>
          
          ))}
    </section>
 );
}

export default Home;



