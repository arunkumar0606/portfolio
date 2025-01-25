import "../css/aboutMe.css";

function Aboutme(){
    return (<div className="container">
        <img src={'/Arun.jpeg'}
          className="pic" alt="Profile" />
        <p className="content">Hi i'm Arun. Currently working as a software developer with over 2.5+yrs of experience.
          Proficient in JAVA development. I love to learn new everyday.
        </p>
    </div>)
}

export default Aboutme;