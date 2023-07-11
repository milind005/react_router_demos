import React from 'react'
import { Link, BrowserRouter, Switch, Route, Redirect, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const DynamicRecursePaths = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route path="/:id">
                    <Person />
                </Route>
                <Route path="/">
                    <Redirect to="/0" />
                </Route>
                <Route path="*">
                    <Redirect to="/0" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


function Person() {
    const { id } = useParams()
    const { url } = useRouteMatch()

    let man = find(id)

    if (!man) {
        return <Redirect to="/0" />
    }
    return (
        <div>
            <h4>{man.name}'s friends</h4>

            <ul>

                {man.friends.map((cur) => {
                    return <li key={cur}><Link to={`${url}/${cur}`}>{find(cur).name}</Link></li>
                })}
            </ul>
            <Switch>
                <Route path={`${url}/:id`}><Person /></Route>
            </Switch>



        </div>
    )
}


const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
];

function find(id) { return (PEEPS.find((cur) => cur.id == id)) }


export default DynamicRecursePaths