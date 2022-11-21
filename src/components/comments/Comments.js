import "./Comments.scss";
import addComment from "../../assets/icons/add_comment.svg";

export default function Comments({videoDetails}){
    const videoComments=videoDetails["comments"];
   
    const timestamps=(oldTimestamp)=>{
        let newTimeStamp=new Date(oldTimestamp);
        let newDate=newTimeStamp.getUTCMonth()+1+"/"+ newTimeStamp.getUTCDate()+"/"+ newTimeStamp.getUTCFullYear();
        return newDate;
          }
         
    
    return(
        <section className="videoComments">
            <p className="videoComments__total"> {videoComments?.length} Comments</p>
            <div className="videoComments__user">
                <div className="videoComments__user-image"></div>
                <div className="videoComments__form">
                    <p className="videoComments__form-heading">JOIN THE CONVERSATION</p>
                    <div className="videoComments__form-inputWrapper">
                    <input type="textarea" name="textarea" placeholder="Add a new comment" className="videoComments__form-input"/>
                    <button className="videoComments__form-button">COMMENT</button>
                    <img src={addComment} alt="add-icon" className="videoComments__form-icon"/>
                    </div>
                </div>

            </div>
        {videoComments&&videoComments?.map((comment)=>(
            
        <div key={comment.id}>
           
            <div className="comments__container">
            
                <div className="comment__container">
                <div className="comment__image-container">

                </div>
                <div className="comment">
                    <div className="comment__heading">
                   <h3 className="comment__name">{comment.name}</h3>
                   
                   <p className="comment__date">{timestamps(comment.timestamp)}
                   </p> 
                </div>
                
                <p className="comment__content">{comment.comment}</p>
                </div>
                </div>
                </div>

                </div>
        ))}
        
    
            </section>
    );
}
