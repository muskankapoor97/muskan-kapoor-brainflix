import "./Hero.scss";
 export default function Hero({videoPoster}){
    return(
        <section className="hero">
            <video className="hero__poster" poster={videoPoster} controls></video>
        </section>
    );
 }
