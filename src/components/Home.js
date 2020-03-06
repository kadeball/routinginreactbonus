import React from "react";
import {Link} from "react-router-dom";
import '../App.css';



function Home(){
    const boxStyle={
        Box1: {
            height: "200px",
            width: "200px",
            backgroundColor: "pink",
            align: "center",
        },
        Box2: {
            height: "200px",
            width: "200px",
            backgroundColor: "rebeccapurple",
            align: "center"
        },
        Box3: {
            height:"200px",
            width:"200px",
            backgroundColor:"cornflowerblue",
            align: "center"
        }
    }



    return(
        <div>
            <div style={boxStyle.Box1}>
                <Link to={"/Pink"}>Pink</Link>
            </div>
            <div className="Box2" style={boxStyle.Box2}>
                <Link to={"/Purple"}>Purple</Link>
            </div>
            <div className="Box3" style={boxStyle.Box3}>
                <Link to={"/Blue"}>Bleu</Link>
            </div>
        </div>


    )
}

export default Home;