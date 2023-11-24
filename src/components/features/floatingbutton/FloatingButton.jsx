import { useEffect, useState } from "react"
import './floatingbutton.css'
import {FaArrowUp} from "react-icons/fa"

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScrolll = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', handleScrolll);
        return () => {
            window.removeEventListener('scroll', handleScrolll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div>
            {isVisible && (
                <button className="floating-button" onClick={scrollToTop}>
                    <FaArrowUp/>
                </button>
            )}

        </div>
    )
}