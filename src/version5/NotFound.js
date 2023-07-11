import React from 'react'
import { Link, BrowserRouter, Switch, Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const NotFound = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Power</h1>
                <ul>
                    <li><Link to="/Match">Form</Link></li>
                    <li><Link to="/Match/doihgi/pdhfvohdsof">another</Link></li>
                    <li><Link to="/yesItsMatch">One</Link></li>
                    <li><Link to="/two">two</Link></li>
                    <li><Link to="/yesItsMatch/Match">two</Link></li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/Match">
                        <MAtch />
                    </Route>
                    <Route exact path="/yesItsMatch">
                        <SecondMatch />
                    </Route>


                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    )
}


function MAtch() { return <h1>MAtch</h1> }
function SecondMatch() { return <h1>SecondMatch</h1> }


function NotFoundPage() {

    const location = useLocation()
    return (
        <div>
            <h3>This {location.pathname} path does not exists</h3>
        </div>
    )
}

export default NotFound