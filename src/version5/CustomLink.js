import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const CustomLink = () => {
    return (
        <div>
            <Router>
                <CustomCompoLink
                    to="/"
                    label="Home"
                    activeOnlyWhenExact={true}
                />
                <CustomCompoLink to="/edit" label="edit" />

                <hr />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/edit"><Edit /></Route>
                </Switch>
            </Router>
        </div >
    )
}


function CustomCompoLink({ to, label, activeOnlyWhenExact }) {
    // let match = useRouteMatch({
    //     path: to,
    //     exact: activeOnlyWhenExact
    // });

    const location = useLocation()
    const match = location.pathname === to
    return (
        <>

            <div className={match ? "active" : ""}>
                {match && "> "}
                <Link to={to}>{label}</Link>
            </div>
        </>
    )
}



function Home() {
    return (
        <div><h1>Home</h1></div>
    )
}
function Edit() {
    return (
        <div><h1>Edit</h1></div>
    )
}



export default CustomLink

