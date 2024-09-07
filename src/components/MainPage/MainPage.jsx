import {useState} from "react";
import Header from "../Header/Header.jsx";
import CardManager from "../CardManager/CardManager.jsx";
import json from "../../assets/content.json";
import Footer from "../Footer/Footer.jsx";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton.jsx";


const MainPage = () => {
    const [searchValue, setSearchValue] = useState("");


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
            <ScrollTopButton/>
        </div>
    );
}

export default MainPage;