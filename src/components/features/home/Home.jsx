import Skills from "../../skills/Skills";
import Profile from "../profile/Profile";
import { Social } from "../social/Social";

import "./home.css";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto m-20 pt-5" id="home">
      <div className="container flex sm:grid-cols-2 items-center justify-center md:grid-cols-3">
        <Social />
        <div className="mb-5">
          <img className="home__img shadow-inner drop-shadow-md border-4" />
        </div>
        <Profile />
      </div>
      <div>
        <Skills/>
      </div>
    </div>
  );
}
