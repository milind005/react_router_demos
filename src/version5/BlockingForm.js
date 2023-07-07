import React, { useState } from 'react'
import { Link, BrowserRouter, Switch, Prompt, Route } from 'react-router-dom/cjs/react-router-dom.min'

const BlockingForm = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Power</h1>
                <ul>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/one">One</Link></li>
                    <li><Link to="/two">two</Link></li>
                </ul>

                <hr />
                <Switch>
                    <Route path="/one">
                        <One />
                    </Route>
                    <Route path="/two">
                        <Two />
                    </Route>
                    <Route path="/Form">
                        <FormCompo />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    )
}

function FormCompo() {
    let [isBlocking, setIsBlocking] = useState(false)
    return (
        <div>
            < form onSubmit={e => {
                e.preventDefault()
                e.target.reset()
                setIsBlocking(false)
            }}>
                <p>
                    Blocking?{" "}
                    {isBlocking ? "Yes, click a link or the back button" : "Nope"}
                </p>

                <Prompt
                    when={isBlocking}
                    message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                    }
                />




                <input type="text" onChange={e => setIsBlocking(e.target.value.length > 0)} />
                <p>
                    <button>Submit to stop blocking</button>
                </p>
            </form>
        </div>
    )
}
function One() { return <h1>One</h1> }
function Two() { return <h1>Two</h1> }

export default BlockingForm