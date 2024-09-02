import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import './style.css'
import Search from "./components/Search/Search.jsx";
import CardManager from "./components/CardManager/CardManager.jsx";
import json from './assets/content.json';


function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="vh-100 container-fluid overflow-auto secondary-bg">
            <div className="row sticky-top secondary-bg shadow rounded-3 m-3">
                <div className="col-4">
                    <Search name="search"
                            example="Cow"
                            className="my-3"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="search"/>
                </div>
            </div>
            <div className="row overflow-auto">
                <div className="col">
                    <CardManager data={json} searchValue={searchValue}/>
                </div>
            </div>
        </div>
    )
}

export default App
