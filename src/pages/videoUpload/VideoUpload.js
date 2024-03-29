import "./VideoUpload.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VideoUpload (){
  const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const newVideo = {
          title:event.target.title.value,
          description:event.target.description.value,
        };
       
       axios
          .post(`http://localhost:8080/videos`, newVideo)
          .then((response) => {
           console.log(" ");
          });
          navigate("/")
      };
     
    return (
    <section className="upload">
        <div className="upload__wrapper">
        <h1 className="upload__heading">Upload Video</h1>
        <form onSubmit={handleSubmit}>
        <div className="upload__flex-wrapper">
        <div className="upload__thumbnail-wrapper">
        <p className="upload__subheading">VIDEO THUMBNAIL</p>
        <div className="upload__thumbnail"></div>
        </div>
        
       <div className="upload__form-wrapper">
       
        <div className="upload__title-wrapper">
        
        <label htmlFor="text" className="upload__subheading">TITLE YOUR VIDEO</label>
        <input type="text" id="text" name="title" placeholder="Add a title to your video" className="upload__input upload__input--title" /> 
        </div>
        <div className="upload__description-wrapper">
        <label htmlFor="description" className="upload__subheading">ADD A VIDEO DESCRIPTION</label>
        <input type="text" id="description" name="description" placeholder="Add a description to your video" className="upload__input upload__input--description" /> 
        </div>
        </div>
        </div>
        <div className="upload__button-wrapper">
        <Link to={"/"}>
        <button className="upload__button upload__button--cancel upload__button--tablet">CANCEL</button>
        </Link>
        {/* <Link to={"/"}> */}
        <button type="submit" className="upload__button upload__button--publish">PUBLISH</button>
        {/* </Link> */}
        
        <Link to={"/"}>
        <button className="upload__button upload__button--cancel upload__button--mobile">CANCEL</button>
        </Link>
        
        </div>
        </form>
       
        </div>
        </section>
    );
}