import "./Description.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

export default function Description({videoDetails}){
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
    return (
    <section className="description">
        <h2 className="description__heading">{title}</h2>
        <hr className="hr--mobile"/>
        <div className="description__info">
        <div className="description__info-containers">
            <p className="description__channel">By {channel}</p>
            
            <p className="description__date">{newDate}</p>
        </div>
        <div className="description__info-containers">
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
        <hr className="hr--tablet"/>
        <p className="description__paragraph">{description}</p>

    </section>
    );
}