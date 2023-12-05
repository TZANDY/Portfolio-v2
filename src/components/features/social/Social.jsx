import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export function Social() {
  return (
    <div className="home__social flex flex-col p-4 w-16 sd:flex-row">
      <a href="#" className="home__social-icon">
        <FaInstagram className="text-2xl  text-indigo-900 m-1 hover:text-amber-400 dark:text-fuchsia-500" />
      </a>
      <a href="#" className="home__social-icon">
        <FaFacebook className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-fuchsia-500" />
      </a>
      <a href="#" className="home__social-icon">
        <FaLinkedin className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-fuchsia-500" />
      </a>
      <a href="#" className="home__social-icon">
        <FaGithub className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-fuchsia-500" />
      </a>
    </div>
  );
}
