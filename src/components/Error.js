import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError()
    return(
        <div>
            <h1>Oops !!</h1>
            <h2>This is not what you are looking for</h2>
            <h3>{err.data}</h3>
        </div>   
    )
}

export default Error