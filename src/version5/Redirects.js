import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Link, Switch, Route, Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Redirects = () => {


    const [isLogin, setLogin] = useState(false)
    return (
        <BrowserRouter>
            <LoginContext.Provider value={{ isLogin, setLogin }}>

                <MessageCompo />
                <div>
                    <ul>
                        <li><Link to="/public" >Home</Link></li>
                        {/* <li><Link to="/Login" >Login</Link></li> */}
                        <li><Link to="/protected" >Protected page</Link></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path="/public" component={Home} />
                        <Route path="/protected" component={Protected} />
                        <Route path="/Login" component={Login} />
                    </Switch>
                </div>
            </LoginContext.Provider>
        </BrowserRouter >
    )
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
function Protected() {
    const { isLogin } = useContext(LoginContext)
    if (isLogin) {

        return (
            <div>
                <h1>Protected</h1>
            </div>
        )
    }
    if (!isLogin) {
        return <Redirect to="/Login" />
    }
}


function Login() {
    const { isLogin, setLogin } = useContext(LoginContext)
    const history = useHistory()
    if (isLogin) {
        // return <Redirect to="/Protected" />
        history.push("/protected")
    }
    else {
        return <div>
            <p>You must login to view the page Protected</p>
            <button
                onClick={() => {
                    setLogin(true)
                }}>LogIN</button>
        </div>
    }
}


const LoginContext = createContext()


function MessageCompo() {
    const { isLogin, setLogin } = useContext(LoginContext)

    if (isLogin) {
        return <div>
            you are logged in
            <button onClick={() => setLogin(false)}>Logout</button>
        </div>
    }
    else {
        return <p>You are not logged in: {" "}</p>
    }


}

export default Redirects