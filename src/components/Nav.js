import {Link} from "react-router-dom";
import React from "react";


function Nav(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/data">Data</Link>
            <Link to="/cool">Cool Tingz</Link>

        </nav>
    )
}

export default Nav;