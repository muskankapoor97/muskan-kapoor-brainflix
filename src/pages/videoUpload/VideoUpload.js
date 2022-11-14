import "./VideoUpload.scss";
import { Link } from "react-router-dom";

export default function VideoUpload (){
    return (
    <section className="upload">
        <h1 className="upload__heading">Upload Video</h1>
        <div className="upload__thumbnail-wrapper">
        <h2 className="upload__subheading">VIDEO THUMBNAIL</h2>
        <div className="upload__thumbnail"></div>
        </div>
        <form>
        <div className="upload__title-wrapper">
        <h2 className="upload__subheading">TITLE YOUR VIDEO</h2>
        <input type="text" name="text" placeholder="Add a title to your video" className="upload__input upload__input--title" /> 
        </div>
        <div className="upload__description-wrapper">
        <h2 className="upload__subheading">ADD A VIDEO DESCRIPTION</h2>
        <input type="textarea" name="textarea" placeholder="Add a description to your video" className="upload__input upload__input--description" /> 
        <div className="upload__button-wrapper">
        <Link to={"/publish"}>
        <button type="submit" className="upload__button upload__button--publish">PUBLISH</button>
        </Link>
        <Link to={"/"}>
        <button type="submit" className="upload__button upload__button--cancel">CANCEL</button>
        </Link>
        
        </div>
        </div>
        </form>
        </section>
    );
}