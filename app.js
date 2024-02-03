const heading = React.createElement(
    "h1",
    {
        id:"tittle",
    },
    "Heading 1"
    );
    const heading2 = React.createElement(
    "h2",
    {
        id:"tittle",
    },
    "Heading 2"
    );
    const container = React.createElement("div",{id: "container"},[heading,heading2])
    console.log(heading);
    const x  = ReactDOM.createRoot(document.getElementById("root"));
    x.render(container);