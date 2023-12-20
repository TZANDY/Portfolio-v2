
import Profile from "../profile/Profile";
import { Social } from "../social/Social";

import "./home.css";

export default function Home() {
  return (
    <div className="max-w-screen-md sm:px-8 lg:flex mx-auto m-20 pt-5 pb-20" id="home">
      <div className="container flex sm:grid-cols-2 items-center justify-center md:grid-cols-3">
        <Social />
        <div className="mb-5 animate-fade animate-duration-[3000ms] animate-delay-1000">
          <img className="home__img shadow-inner drop-shadow-2xl border-4 border-slate-200 shadow-slate-200 " />
        </div>
        <Profile />
      </div>
      
    </div>
  );
}
