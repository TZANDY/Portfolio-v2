import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Social() {
    return (
        <div>
            <div className="home__social">
                <a href="https://instagram.com/andi.infante" className="text-3xl text-red-700">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/Andi.Infante.S" className="home__social-icon" >
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/andi-inf-sil/" className="home__social-icon" >
                    <FaLinkedin />
                </a>
                <a href="https://github.com/TZANDY" className="home__social-icon">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}