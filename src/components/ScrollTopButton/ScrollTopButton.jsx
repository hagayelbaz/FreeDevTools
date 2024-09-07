import UpIcon from "../../assets/svg/up.svg?react";
import {useEffect, useState} from "react";


const ScrollTopButton = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 500);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showTopBtn && (
                <button className="button-no-style position-fixed text-color bottom-0 end-0 m-3"
                        onClick={scrollToTop}>
                    <UpIcon className="fs-1 accent-color m-2"/>
                </button>
            )}
        </>
    )
}

export default ScrollTopButton;