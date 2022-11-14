import "./SideVideos.scss";
import { Link } from "react-router-dom";


export default function SideVideos({videos}) {
  return (
    <article className="sidevideos">
      <div className="sidevideos__wrapper">
      <h2 className="sidevideos__heading">NEXT VIDEOS</h2>
      
      {videos.map((video) => (
        <>
        <div key={video.id}>
        <div className="sidevideos__container">
        <Link to={`/videos/${video?.id}`}> 
        <img
          src={video.image}
          alt={video.title}
          className="sidevideo__image"
          key={video.id}
           />
          </Link>
          <div className="sidevideo__content">
            <p className="sidevideo__content-title">{video.title}</p>
            <p className="sidevideo__content-channel">{video.channel}</p>
          </div>
        </div></div>
          </>
          ))}
          </div>
      
    </article>
  );
}
