import "./Hero.scss";
 export default function Hero({videoPoster}){
    return(
        <section className="hero">
            <div className="hero__poster-wrapper">
            <video className="hero__poster" poster={videoPoster} controls></video>
            </div>
        </section>
    );
 }
