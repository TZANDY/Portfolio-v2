import Info from "./Info";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        
        <div className="about__data">
          <Info/>
          <p className="about__description">
            I am a graduate of Systems Engineering. As a freelance developer I
            have created several projects for some well-known clients and for
            the companies where I have worked, but I want to gain more
            experience and learn more about that world{" "}
            
          </p>

          <a download="" className="button button--flex">
            Download CV
            
          </a>
        </div>
      </div>
    </section>
  );
}
