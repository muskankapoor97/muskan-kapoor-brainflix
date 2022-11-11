import brainflixVideos from "../data/videos.json";
import brainflixVideoDetails from "../data/video-details.json";



export const getVideos = (VideoId) => {
    return brainflixVideos.filter((video) => video.id !== VideoId);
  };
  
  const getVideoDetails = (VideoId) => {
    return brainflixVideoDetails.find(
      (video) => video.id === VideoId
    );
  };
  
  export default getVideoDetails;