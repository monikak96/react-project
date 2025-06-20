const parent = React.
createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id :"child"},
        [
            React.createElement("h1",{},"This is an h1 tag"),
            React.createElement("h2",{},"This is an h2 tag")
        ]
    )
)
//for creating two child divs 
const parent2 = React.
createElement(
    "div",
    {id:"parent"},
    [
    React.createElement(
        "div",
        {id :"child"},
        [
            React.createElement("h1",{},"This is an h1 tag"),
            React.createElement("h2",{},"This is an h2 tag")
        ]
    ),
    React.createElement(
        "div",
        {id :"child2"},
        [
            React.createElement("h1",{},"This is an h1 tag"),
            React.createElement("h2",{},"This is an h2 tag")
        ]
    )]
)
// now for creating a small html , we need to create a lot of nested createElements which is 
// Instead we will use JSX
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent2)