import Profile from "../profile/Profile";
import { Social } from "../social/Social";


import "./home.css";

export default function Home() {
  return (
    <section className="max-w-screen-md mx-auto m-10" id="home">
      <div className="container flex sm:grid-cols-2 items-center justify-center md:grid-cols-3">
        <Social />
        <div className="max-w-lg"><img className="home__img grid" /></div>
        <Profile />
      </div>

      

    </section>
  );
}
