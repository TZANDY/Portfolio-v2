import { FaInstagram, FaLinkedin, FaFacebook, FaGithub,FaWhatsapp } from "react-icons/fa";

export function Social() {
  return (
    <div className="home__social flex flex-col p-4 w-16 sd:flex-row">
      <a href="https://instagram.com/andi.infante" target="_blank" className="home__social-icon">
        <FaInstagram className="text-2xl  text-indigo-900 m-1 hover:text-amber-400 dark:text-blue-700" />
      </a>
      <a href="https://www.facebook.com/Andi.Infante.S" target="_blank" className="home__social-icon">
        <FaFacebook className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-blue-700" />
      </a>
      <a href="https://www.linkedin.com/in/andi-inf-sil/" target="_blank" className="home__social-icon">
        <FaLinkedin className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-blue-700" />
      </a>
      <a href="https://github.com/TZANDY" target="_blank" className="home__social-icon">
        <FaGithub className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-blue-700" />
      </a>
      <a href="https://github.com/TZANDY" target="_blank" className="home__social-icon">
        <FaWhatsapp className="text-2xl text-indigo-900 m-1  hover:text-amber-400 dark:text-blue-700" />
      </a>
    </div>
  );
}
