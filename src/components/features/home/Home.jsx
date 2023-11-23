import Profile from "../profile/Profile";
import { Social } from "../social/Social";


import "./home.css";

export default function Home() {
  return (
    <section className="max-w-screen-md mx-auto p-4" id="home">
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-3">
        <img className="home__img grid"/>
          <Social/>
          
          <Profile />
          
        </div>
      </div>
    </section>
  );
}
