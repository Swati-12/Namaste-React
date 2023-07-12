    const heading = React.createElement("div" , { id:"parent"}, React.createElement("div" , {id:"child"},[
        React.createElement("h1",{id:"h1"} , "Hello H1 from React Js") ,
        React.createElement("h2" , {id:"h2"} , "Hello H2" )
    ]));
    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
