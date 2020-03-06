import React from "react";


function Cool(){
    const style={
        backgroundColor: "rebeccapurple",
        height: "100vh",
        color: "cornflowerblue"
    }
    return(
        <div style={style}>
            <h1>How to Build a Snowman</h1>
            <ol>
                <li>First pick a good location. One far enough from the driveway so that your mom doesn't back over it (Yes that really happened to me)</li>
                <li>Second, make sure that your snowman is built from large to small. You don't want your snowman built like a sack of dirty laundry</li>
                <li>Lastly, bundle up your gonna be out there for a while!!!</li>

            </ol>
        </div>
    )


}

export default Cool;