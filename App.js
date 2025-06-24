import React from "react";
import ReactDOM from "react-dom/client"

// const jsXheading = (<h1 id="heading">
//     This is a header written using jsX
//     </h1>);
// write a functional component
const MainHeading = () => (
    <div className="conatiner">
        <HeadingComponent/>
        <h1 className="heading"> This is main JS component</h1>
    </div>
)
const HeadingComponent = () => (
    <h1 className="heading">This is a functional component</h1>
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(< MainHeading/>)