import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import './style.css'
import CardManager from "./components/CardManager/CardManager.jsx";
import json from './assets/content.json';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UpIcon from '././assets/svg/up.svg?react';


function App() {
    const [searchValue, setSearchValue] = useState("");
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="container-fluid d-flex flex-column min-vh-100 primary-bg">
            <div className="row sticky-top">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className="row flex-grow-1">
                <div className="col p-0 m-3">
                    <CardManager data={json} searchValue={searchValue}/>
                </div>
            </div>
            <div className="row">
                <div className="col p-0 mx-3">
                    <Footer/>
                </div>
            </div>
            {showTopBtn && (
                <button className="button-no-style position-fixed text-color bottom-0 end-0 m-3"
                        onClick={scrollToTop}>
                    <UpIcon className="fs-1 accent-color m-2"/>
                </button>
            )}
        </div>
    );
}


export default App
