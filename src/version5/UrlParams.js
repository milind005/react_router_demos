import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom'


const UrlParams = () => {
    return (
        <div>
            <Router>
                <div>
                    <h1>This is version 5 react router dom</h1>
                    <h3>Url Params v5</h3>
                    <ul>

                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Assets">Assets</Link></li>
                        <li><Link to="/Store">Store</Link></li>
                        <li><Link to="/Power">Power</Link></li>
                        <li><Link to="/Road">Road</Link></li>
                    </ul>
                </div>
                <hr />

                <div>

                    <Switch >
                        <Route path="/:id" children={<Child />} />

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

function Child() {

    let { id } = useParams()
    return (
        <>
            <h1>this is :{id}</h1>

        </>
    )
}




export default UrlParams