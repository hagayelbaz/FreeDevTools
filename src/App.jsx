import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import './App.css'
import Search from "./components/Search/Search.jsx";


function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="bg-dark vh-100 container-fluid">
           <div className="row">
               <div className="col-4">
                   <Search name="search"
                           example="Cow"
                           className="mt-3"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           placeholder="search"/>
               </div>
           </div>
            <div className="row">
                <div className="col">
                    <hr className="w-100 my-3"/>
                </div>
            </div>
        </div>
    )
}

export default App
