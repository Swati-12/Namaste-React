    import React from "react";
    import ReactDOM from "react-dom/client";
    
    
    
    const heading = React.createElement("div" , { id:"parent"}, React.createElement("div" , {id:"child"},[
        React.createElement("h1",{id:"h1"} , "Hello H1 from React Js") ,
        React.createElement("h2" , {id:"h2"} , "Hello H2" )
    ]));
    console.log(heading);

    const jsx = <h1 id="js"> This is JSX Example </h1>;
    console.log(jsx);

    const Title=()=>{
        <h1 className="title"> "Hello I'm Title</h1>
    };

    const Fun =()=>{
        <Title/>
        return <h2>Hello Swati ! in the Coding World</h2>

    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Fun/>);

    
