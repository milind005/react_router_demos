import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { useLocation, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
const DynamicallynestedRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/products/id:5">product of id</Link></li>
                    <li><Link to="/products/id:5/name:'ram'">product with id and name</Link></li>
                </ul>


                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/products/" ><Product /></Route>
                    <Route exact path="/products/:id"><Product power="screen" /></Route>
                    <Route exact path="/products/:id/:name"><Product /></Route>
                    <Route exact path="/products/:id/:name"><Product /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default DynamicallynestedRoute



function Home() {
    return <h1>Home</h1>
}
function About() { return <h1>ABout</h1> }
function Product() {
    const { id, name } = useParams()

    // console.log(id, name, useParams())
    // console.log(useLocation().pathname)
    console.log(useRouteMatch())

    return (
        <>
            <h1>Raja</h1>
            <h1>id is {id}</h1>
            <h1>name is {name}</h1>
        </>
    )
}
