import React from "react";
import {Link} from "react-router-dom";
import "../App.css";


const objects = [
    {
        name:'Kallie', color: 'pink', age: 21, id: 1
    },{
        name:'Damien', color: "blue", age:31, id: 2
    }, {
        name:'Kaspian', color: "purple", age:41, id: 3}
];

function Data(){
    let objectDiv = objects.map(objects => {

        let styles = {
            backgroundColor: objects.color,
            height: "170px",
            width: "200px"
        };


        return (
            <div style={styles}>
                <p key={objects.id} ><Link to={`/data/${objects.id}/${objects.name}/${objects.age}/${objects.color}`}>{objects.name}</Link></p>
                <p>Name: {objects.name}</p>
                <p>Age: {objects.age}</p>
                <p>Color: {objects.color}</p>
                <p>ID: {objects.id}</p>
            </div>
        )
    });
    return objectDiv;

}


export default Data;