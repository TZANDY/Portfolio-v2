import { FaInstagram, FaLinkedin, FaFacebook, FaGithub,FaWhatsapp } from "react-icons/fa";

export function Social() {
  return (
    <div className="home__social flex flex-col p-4 w-16 sd:flex-row animate-pulse">
      <a href="https://instagram.com/andi.infante" target="_blank" title="Intragram" rel="noreferrer" >
        <FaInstagram className="text-2xl  text-blue-700  m-1 transition hover:text-green-400 dark:text-slate-200 bg-slate-900 rounded-full" />
      </a>
      <a href="https://www.facebook.com/Andi.Infante.S" target="_blank" title="Facebook" rel="noreferrer">
        <FaFacebook className="text-2xl text-blue-700  m-1 transition hover:text-green-400 dark:text-slate-200 bg-slate-900 rounded-full" />
      </a>
      <a href="https://www.linkedin.com/in/andi-inf-sil/" target="_blank" title="Linkedin" rel="noreferrer" >
        <FaLinkedin className="text-2xl text-blue-700  m-1  transition hover:text-green-400 dark:text-slate-200 bg-slate-900 rounded-full" />
      </a>
      <a href="https://github.com/TZANDY" target="_blank" title="Github" rel="noreferrer">
        <FaGithub className="text-2xl text-blue-700  m-1 transition hover:text-green-400 dark:text-slate-200 bg-slate-900 rounded-full" />
      </a>
      <a href="https://github.com/TZANDY" target="_blank" title="Whatsapp" rel="noreferrer">
        <FaWhatsapp className="text-2xl text-blue-700 m-1  transition hover:text-green-400 dark:text-slate-200 bg-slate-900 rounded-full" />
      </a>
    </div>
  );
}
