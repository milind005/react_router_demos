import React from 'react'
import "./Navbar.css"





const Navbar = ({ navObj, setNav }) => {



    function navHandler(cur) {

        let obj = { ...navObj }
        Object.keys(obj).forEach((cat) => {
            if (cat === cur) {
                obj[cat] = true
            }
            else {
                obj[cat] = false
            }
        })

        setNav(obj)
    }

    return (
        <>
            <div className="sidenav">
                {Object.keys(navObj).map((cur) => {
                    return (
                        <a key={cur}
                            className={!!navObj[cur] && "active"}
                            onClick={() => navHandler(cur)}
                        >{cur}</a>
                    )
                })}
            </div>


        </>

    )
}

export default Navbar