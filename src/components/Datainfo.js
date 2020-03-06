import React, { useState } from "react";

function Datainfo({match}) {

    const [name] = useState(match.params.name);
    const [age] = useState(match.params.age);
    const [color] = useState(match.params.color);
    const [id] = useState(match.params.id);

    const style = {
        width: '170px',
        height: '200px',
        backgroundColor: `${color}`,
        borderRadius: "5px",
    };

    return (
        <div>
            <div style={style}>
                <p>{name}</p>
                <p>Age: {age}</p>
                <p>ID: {id}</p>
            </div>
        </div>
    )

}

export default Datainfo;