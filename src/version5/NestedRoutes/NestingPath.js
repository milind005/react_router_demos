import React from 'react'
import { BrowserRouter, Link, useRouteMatch, Switch, Route, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const NestingPath = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                </div>


                <Switch>
                    <Route exact path="/"> <Home /></Route>
                    <Route path="/topics">  <Topics /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}


function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
function Topics() {
    const { url, path } = useRouteMatch()

    return (
        <div>
            <h2>Topics</h2>
            <div>
                <ul>

                    <li><Link to={`${url}/topic1`}>topic1</Link></li>
                    <li><Link to={`${url}/topic2`}>topic2</Link></li>
                    <li><Link to={`${url}/topic3`}>topic3</Link></li>
                    <li><Link to={`${url}/topic4`}>topic4</Link></li>

                </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path={path}>
                        <h3>This is default path i got</h3>
                    </Route>
                    <Route path={`${path}/:topicId`}><Topic /></Route>

                </Switch>


            </div >

        </div >
    )
}
export default NestingPath


function Topic() {
    let { topicId } = useParams()
    return (
        < div >
            <h3>{topicId}</h3>
        </div >
    )
}